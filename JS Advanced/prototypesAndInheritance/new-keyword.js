function Person(name, age) {
    this.name = name;
    this.age = age;
}

// The correct way to add method
Person.prototype.greet = function () {
    console.log(`Hello! My name is ${this.name} and I'm ${this.age} years old.`);
};

function make(constructor, first, second) {
    // 1. Create new object
    let obj = {};

    // 2. set prototype of the object
    Object.setPrototypeOf(obj, constructor.prototype);

    // 3. calls constructor
    constructor.call(obj, first, second);

    // 4. return create object
    return obj;
}

// Using new keyword
let pepi = new Person('Pesho', 17);
pepi.greet();

// Using custom new function
let goshko = make(Person, 'Georgi', 15);
goshko.greet();