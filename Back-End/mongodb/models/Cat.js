const mongoose = require('mongoose');

const catSchema = new mongoose.Schema({
        name: String,
        color: String
    });
    const Cat = mongoose.model('Cat', catSchema);


    
    // const myCat = new Cat({
    //     name: "Garry",
    //     color: "Black"
    // });
    // await myCat.save();
    
    // const data = await Cat.find({});
    // console.log(data);

module.exports = Cat;