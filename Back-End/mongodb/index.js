const mongoose = require('mongoose');
const Cat = require('./models/Cat');

start();

async function start() {
    // const uri = 'mongodb+srv://retimid:password@ddgtest.w6g8wni.mongodb.net/test'
    const uri = 'mongodb://127.0.0.1:27017/testdb';

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to the database - Successful !');


    try {
        const comeCat = new Cat({
            name: 'Fluffy',
            color: 'White'
        });
        await someCat.save();
    } catch (error) {
        console.log(error.message);
    }

 


}

