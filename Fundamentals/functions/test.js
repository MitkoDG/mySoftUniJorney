function test(array) {
    let arr = array
    console.log(arr+ " which is number");
    let result = arr.toString()
    console.log(typeof(result));
    console.log(result+" array as String");

    let splitResult = result.split("")
    console.log(splitResult);

    let reversedRes = splitResult.reverse()
    console.log(reversedRes);

    let joinedRev = reversedRes.join("")
    console.log(joinedRev);
    console.log(typeof joinedRev);
    let strToNum = Number(joinedRev)
    console.log(strToNum);
    console.log(typeof strToNum);

}
test(123)



// function print(string) {
//     console.log('hello');
// }


// function returnValue(value) {
//     // return value
//     console.log('123');
// }
// // print('Hello')
// // console.log(returnValue('Hello'));
// //-----------------------------

// function printText() {
//     print()
//     returnValue()
// }
// printText()

// //----------------------------

// // let firstName = 'Angel'
// // let lastName = 'Georgiev'
// // let fullname = getFullName("Angel", "Georgiev");

// function getFullName(firstName, lastName) {
//     return firstName + " " + lastName;
// }
// getFullName("Angel", "Georgiev");
