function objCreator(fn, ln, a) {
    let person = {
        firstName: fn,
        lastName: ln,
        age: a,
        sayHello: function () {
            console.log("Hello");
        }
        // sayHello() { // alternative of the above
        //     console.log("Hello");
        // }
    }

    let entries = Object.entries(person)

    person.sayGoodbye = () => console.log("Bye");

    person.sayHello()
    person.sayGoodbye()
    // console.log(person.firstName);
    console.log(Object.keys(person));
    return person
}
// objCreator("Peter", "Pan", 20)

let vegy = {
    'carots': 'orange',
    'apples': 'red',
    'peach': 'yellow'
};
let sorted = Object.entries(vegy)

let sortedObj = sorted.sort((a, b) => {
    return a[0].localeCompare(b[0]) || a[1].localeCompare(b[1])
})
for (const key of sortedObj) {
    console.log(`${key[0]} has ${key[1]} color`);
}

function math(a, b, operator) {
    switch (operator) {
        case 'multiply':
            multiply(a, b);
            
            break;
        //TODO: other cases
    }
    function multiply(a, b) {
        return console.log( a * b )
    }
}
math(5, 2, "multiply")


