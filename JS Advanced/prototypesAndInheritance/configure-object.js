let person = {
    name: 'Pesho',
    age: 22,
    height: 190
};

// let clonedPerson = { ...person };
let clonedPerson = Object.assign({}, person);

// Object freeze
Object.freeze(person);

person.weight = 80;
person.name = 'Gosho';
console.log(person);

console.log(Object.getOwnPropertyDescriptors(person));

// Object seal - cannot add or remove properties
Object.seal(clonedPerson);
console.log(Object.getOwnPropertyDescriptors(clonedPerson));

clonedPerson.newProp = 'asds';

console.log(clonedPerson);

// Objects with const
const constantObject = {
    prop: 'value'
};

constantObject.prop = 'newValue';
console.log(constantObject);

// constantObject = { prop: 'new ref' }; // This will throw error