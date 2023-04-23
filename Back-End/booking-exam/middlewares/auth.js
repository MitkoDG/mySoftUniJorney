const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userService = require('../services/user')

function init() {
    return function (req,res, next) {
        // TODO parse jwt



        next();
    };
};

async function register(username, password) {
    // TODO extra validations or use the express validator

    const existing = await userService.getUserByUsername(username);

    if(existing){
        throw new Error('Username is taken!')
    }
};