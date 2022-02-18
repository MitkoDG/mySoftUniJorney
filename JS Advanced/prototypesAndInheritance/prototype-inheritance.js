function Animal(type, name, age) {
    this.type = type;
    this.name = name;
    this.age = age;
}

Animal.prototype.eat = function() {
    console.log(`${this.name} - nom nom`);
};

function Cat(name, age) {
    Animal.call(this, 'Cat', name, age);
}

Cat.prototype = Object.create(Animal.prototype);
Cat.prototype.purrr = function() {
    console.log(`${this.name} - purrrr...`);
};

let navcho = new Cat('Navuhodonosor', 7);
navcho.eat();
navcho.purrr();
console.log(navcho);