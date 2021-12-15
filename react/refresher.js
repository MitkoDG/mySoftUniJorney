let person = {
    name: "Max"
}


let anotherPerson = {
    ...person
}
person.name = "Manu"

console.log(person);

console.log(anotherPerson);

const numbers = [1,2,3]

const doubleNumArray = numbers.map((num) => {
    return num * 2
})

console.log(numbers);
console.log(doubleNumArray);