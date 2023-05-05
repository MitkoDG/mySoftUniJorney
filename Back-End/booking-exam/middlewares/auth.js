const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const { TOKEN_SECRET, COOKIE_NANE } = require('../config')
const userService = require('../services/user');

module.exports = () => (req, res, next) => {
    // TODO parse jwt
    // attach functions to context
    if (parseToken(req, res)) {
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
    }
};

async function register(username, password) {
    // TODO extra validations or use the express validator

    const existing = await userService.getUserByUsername(username);

    if (existing) {
        throw new Error('Username is taken!');
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userService.createUser(username, hashedPassword);

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
    return jwt.sign({
        _id: userData._id,
        username: userData.username
    }, TOKEN_SECRET);

}

function parseToken(req, res) {
    const token = req.cookies[COOKIE_NANE];
    try {
        const userData = jwt.verify(token, TOKEN_SECRET);
        req.user = userData;

        return true;
    } catch (err) {
        res.clearCookie(COOKIE_NANE);
        res.redirect('/auth/login');

        return false;
    }
}
