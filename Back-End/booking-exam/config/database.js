const mongoose = require('mongoose');

module.exports = (app) => {
    try {
        mongoose.connect(DB_CONNECTON_STRING);
    } catch (error) {
        const db = mongoose.connection;
        db.on('error', err => {
            logError('connection error', err);
        });
    }

};