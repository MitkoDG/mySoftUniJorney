const fs = require('fs');
const uniqid = require('uniqid');

let data = {};

// model structure
// "cube1": {
//     "Name": "string",    
//     "Description": "string",
//     "Image URL": "string",
//     "Difficulty": "number"
//   }

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json'));
    } catch (err) {
        console.error('Error reading database ( init )' + err)
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        };
        next();
    };
};

async function getAll(query) {
    let cubes = Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v))

    // filter cubes by query params

    if (query.search) {
        cubes = cubes.filter(c => c.name.toLowerCase().includes(query.search.toLowerCase()));
    };

    if (query.from) {
        cubes = cubes.filter(c => c.difficulty >= Number(query.from))
    }
    if (query.to) {
        cubes = cubes.filter(c => c.difficulty <= Number(query.to))
    }

    return cubes;
};

async function getById(id) {
    return data[id];
};

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data, null, 2));
        console.log('Created new record');
    } catch (err) {
        console.error('Error reading database ( create )' + err);
    }
};

module.exports = {
    init,
    getAll,
    getById,
    create
}