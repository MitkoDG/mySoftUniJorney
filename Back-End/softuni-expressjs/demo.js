const fs = require('fs/promises');

// console.log('before');
// handleFiles();
// console.log('after');

// function handleFiles() {
//     fs.readFile('./package.json', (err, data) => {

//         console.log(data.toString());
//     });

// }

demo();

async function demo() {
    const files = await fs.readdir('.');
    console.log(files);
}

// delete files

// async function unlinkFile() {
//     await fs.unlink('./package_copy.json');
// }