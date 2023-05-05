const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');
const authMiddleware = require('../middlewares/auth');

module.exports = (app) => {

    app.engine('hbs', hbs.engine({
        extname: '.hbs',
        // defaultLayout: 'layout',
        // layoutsDir: __dirname + '/views/layout/',
        // partialsDir: __dirname + '/views/partials'
    }));

    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    app.use(cookieParser());
    app.use(authMiddleware());

    app.use((req, res, next) => {
        if (req.url.includes('/favicon.ico')) {
            console.log(req.method + ' ' + req.url);
            if (req.user) {
                console.log('Know user', req.user.username);
            }
        }
        next();
    });
}