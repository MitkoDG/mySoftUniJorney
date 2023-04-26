const mongoose = require('mongoose');

const { DB_CONNECTON_STRING } = require('./index');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTON_STRING);
        console.log('Connected to the database');

        const db = mongoose.connection;
        db.on('error', (error) => {
            console.error('connection error', error);
            reject(error);
        })
        db.once('open', function () {
            console.log('Ready');
            resolve();
        });

    });
};