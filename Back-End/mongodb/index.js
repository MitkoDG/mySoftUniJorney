const mongoose = require('mongoose');

start();

async function start() {
    const uri = 'mongodb://localhost:27017/testdb';

    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    });

    console.log('Connected to the database - Successful !');

    const catSchema = new mongoose.Schema({
        name: String,
        color: String
    });
    const Cat = mongoose.model('Cat', catSchema);

    const data = await Cat.find({});

    // const myCat = new Cat({
    //     name: "Garry",
    //     color: "Black"
    // });
    // await myCat.save();

    console.log(data);

    // const MyModel = mongoose.model('Cat', new Schema({
    //     name: String,
    //     color: String
    // }));
}

