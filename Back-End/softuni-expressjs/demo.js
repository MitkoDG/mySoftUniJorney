const { log } = require('console');
const fs = require('fs');

const data = fs.readFileSync('./package.json');

console.log(data.toString());

