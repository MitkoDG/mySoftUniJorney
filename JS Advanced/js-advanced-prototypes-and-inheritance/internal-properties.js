let person = {
    name: 'Pesho',
    age: 20,
};

let internalNameProperties = Object.getOwnPropertyDescriptor(person, 'name');
console.log(internalNameProperties);

// Modify internal property of existing property
Object.defineProperty(person, 'name', { enumerable: false });

// Add new property and configure internal properties
Object.defineProperty(person, 'height', { value: 190, enumerable: true, writable: false });

for (const key in person) {
    console.log(key);
}

Object.keys(person).forEach(x => console.log(x));

console.log(JSON.stringify(person));

// Cannot change value of non writable property
person.height = 192; // Does not work!
console.log(person.height);


// Define more than one property at once
Object.defineProperties(person, {
    name: {
        enumerable: true
    },
    age: {
        value: 22,
        configurable: false,
    }
});

console.log(person);


// Add getter 
Object.defineProperty(person, 'info', { 
    get: function() {
        return `${this.name} - ${this.age}`
    },
    set: function(value) {
        let [name, ageText] = value.split(' - ');

        this.name = name;
        this.age = Number(ageText);
    },
    enumerable: false,
    configurable: false,
});
person.info = 'Gosho - 32'
console.log(person.info);
console.log(person);
