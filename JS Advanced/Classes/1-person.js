class Person {
    constructor(firstName, lastName, age, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }

    toString() {
        let personalInfo = `${this.firstName} ${this.lastName} (age: ${this.age}, email: ${this.email})`;

        return personalInfo;
    }
}

let person = new Person('Anna', 'Simpson', 22, 'anna@yahoo.com');
console.log(person.toString());



class Personal {
    constructor(firstName,lastName,age,email){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.email = email;
    }
    toString() {
        return `My name is ${this.firstName} ${this.lastName}, ${this.age} years old with email ${this.email}`;
    }
}

const myPerson = new Personal('Dimitar', 'Gegov', 38, 'retimid@abv.bg');
console.log(myPerson.toString());
