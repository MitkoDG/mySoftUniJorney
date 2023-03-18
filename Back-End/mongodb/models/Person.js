const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});


const person1 = new Person({
    firstName: 'Peter',
    lastName: 'Jacky',
    age: 29
});

const Person = mongoose.model('Person', personSchema);

await person1.save();
const people = await Person.find({});

personSchema.methods.sayHi = function () {
    console.log(`My name is ${this.firstName} and I am ${this.age} years old.`);
};

console.log(people);

module.exports = Person;