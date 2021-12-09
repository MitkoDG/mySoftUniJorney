function solve (arr) {

    
    let oldArraySum = 0;
    let newArraySum = 0;
    for (let i = 0; i < arr.length; i++) {
        oldArraySum += arr[i];
    }

    let newArray = [];
    for (let x = 0; x < arr.length; x++) {
        let num = arr[x];
       if (num % 2 === 0) {
           newArray.push(num+x)
           newArraySum += ( num+x)
       } else {
        newArray.push(num-x)
        newArraySum += (num-x)
          
       }
    }
console.log(newArray);
console.log(oldArraySum);
console.log(newArraySum);
}
solve([5, 15, 23, 56, 35])

function arr(input) {
    let arrOfNumbers = input;
    let modifiedNumArr = [];
    let firstArrSum = 0;
    let secondArrSum = 0;

    let arrLength = arrOfNumbers.length;

    for (let i = 0; i < arrLength; i++) {
        let currentNumber = arrOfNumbers[i];
        let newNumber;
        firstArrSum+= currentNumber
        if (currentNumber % 2 === 0){
            let newNumber = currentNumber + i;
            modifiedNumArr.push(newNumber);
        } else {
           newNumber = currentNumber - i;
        }
        modifiedNumArr.push(newNumber)
        secondArrSum+= newNumber
    }
    console.log(modifiedNumArr);
    console.log(firstArrSum);
    console.log((secondArrSum));

}
arr([5, 15, 23, 56, 35]);
