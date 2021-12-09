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
objCreator("Peter", "Pan", 20)