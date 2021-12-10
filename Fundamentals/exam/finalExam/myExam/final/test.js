let text = "this is my string!"
let whatToCut = text.slice(8);
let textArr = text.split(whatToCut).join("")

console.log(whatToCut)

// let dummyString = 'Javascript is popular language'
// dummyString = dummyString.slice(10) // note that indexes start from zero.
// console.log( dummyString )