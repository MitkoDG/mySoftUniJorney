let cat = {
    name: 'Generic Cat Name',
    makeSound() {
        console.log(`${this.name} - meow...`);
    }
}

let navcho = Object.create(cat);

navcho.name = 'Navuhodonosor';
console.log(navcho);
navcho.makeSound();

console.log(cat == navcho.__proto__);

// Check if property is own
console.log(navcho.hasOwnProperty('name'));
console.log(navcho.hasOwnProperty('makeSound'));

// For in
console.log('------for in iteration------');   
// for (const key in navcho) {
//     console.log(key);
// }

for (const key in navcho) {
    // if (Object.hasOwnProperty.call(navcho, key)) {
    if (navcho.hasOwnProperty(key)) {
        const element = navcho[key];

        console.log(element);
    }
}