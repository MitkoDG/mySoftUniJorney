const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author: { type: mongoose.Schema.Types.ObjectId, ref: 'Person' },
    title: { type: String, require: true },
    content: { type: String, require: true },
    comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment'}]
});

module.exports = mongoose.model('Post', schema);