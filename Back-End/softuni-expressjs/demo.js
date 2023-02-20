const fs = require('fs');

console.log('before');
handleFiles();
console.log('after');

function handleFiles() {
    fs.readFile('./package.json', (err, data) => {

        console.log(data.toString());
    });

}

