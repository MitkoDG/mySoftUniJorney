class Animal {
    constructor(type, name, age) {
        this.type = type;
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} - nom nom`);
    }
}

class Cat extends Animal {
    constructor(name, age) {
        super('Cat', name, age);
    }

    purr() {
        console.log(`${this.name} - purrr`);
    }
}

let navcho = new Cat('Navuhodonosor', 7);
navcho.eat();
navcho.purr();
