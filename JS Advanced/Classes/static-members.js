class Cat {
    static legNumber = 4;
    isHungry = true;

    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name}: Meao!`);
    }

    static vetCheck(cat) {
        if (cat.isHungry) {
            console.log('This cat should be fed!');
        } else {
            console.log('This cat is fine');
        }
    }
}

let cat = new Cat('Navcho');

cat.makeSound();

// Static method
Cat.vetCheck(cat);

// Static property
console.log(Cat.legNumber);
