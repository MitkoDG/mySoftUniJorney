const mongoose = require('mongoose');

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect('mongodb://127.0.0.1:27017/cubicle');

        const db = mongoose.connection;
        db.on('error', err => {
            console.log('Database error: ', err.message);
            reject(err.message);
        });

        db.on('open', () => {
            console.log('Database connected');
            resolve();
        });
    });

};