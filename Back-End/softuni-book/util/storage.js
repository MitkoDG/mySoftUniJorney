const fs = require('fs');
const { title } = require('process');

let data = {};

async function init() {
    data = await fs.readFile('./data/books.json');

    return (req, res, next) => {
        req.storage = {
            getAll,
            getAll
        },
            next();
    }
};

function getAll() {
    return Object
    .entries(data)
    .map(([id, book]) =>({
        id,
        title: book.title,
        author: book.author
    }));
};

function getById(id) {
    return data[id];
};

module.exports = init;