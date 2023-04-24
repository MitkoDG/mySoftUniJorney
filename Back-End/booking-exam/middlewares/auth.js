const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NANE } = require('../config')
const userService = require('../services/user');

function init() {
    return function (req, res, next) {
        // TODO parse jwt
        // attach functions to context
        req.auth = {
            async register(username, password) {
                const token = await register(username, password);
                res.cookie(COOKIE_NANE, token);
            },
            async login() {
                const token = await login(username, password);
                res.cookie(COOKIE_NANE, token);
            },
            logout() {
                res.clearCookie(COOKIE_NANE);
            }
        }


        next();
    };
};

async function register(username, password) {
    // TODO extra validations or use the express validator

    const existing = await userService.getUserByUsername(username);

    if (existing) {
        throw new Error('Username is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, hashedPassword); // hashed or password

    // TODO log in user
    return generateToken(user);
};

async function login(username, password) {
    const user = await userService.getUserByUsername(username);

    if (!user) {
        throw new Error('No such user');
    }

    const hasMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!hasMatch) {
        throw new Error('Incorrect password');
    }

    return generateToken(user);

}


function generateToken(userData) {
    return token = jwt.sign({
        _id: user._id,
        username: userData.username
    }, TOKEN_SECRET);
    
}

// function for functionality testing
