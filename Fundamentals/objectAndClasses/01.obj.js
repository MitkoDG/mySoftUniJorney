function objCreator(fn, ln, a) {
    let person = {
        firstName: fn,
        lastName: ln,
        age: a
    }
    // console.log(person.firstName);
    return person
}
objCreator("Peter", "Pan", 20)