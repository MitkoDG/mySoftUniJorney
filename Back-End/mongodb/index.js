const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Person = require('./models/Person');

start();

async function start() {
    // const uri = 'mongodb+srv://retimid:password@ddgtest.w6g8wni.mongodb.net/test'
    const uri = 'mongodb://127.0.0.1:27017/testdb';

    const client = mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log('Connected to the database - Successful !');

    // const data = await Person.find({ firstName: 'Peter' });
    const data = await Person.find({ _id: '6415e6372c310cc411d1dddb' });
    console.log(data);

    // try {
    //     const comeCat = new Cat({
    //         name: 'Fluffy',
    //         color: 'White'
    //     });
    //     await someCat.save();
    // } catch (error) {
    //     console.log(error.message);
    // }

}

