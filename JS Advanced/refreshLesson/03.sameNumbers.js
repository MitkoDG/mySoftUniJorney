function sameNumbers(input) {
    let numToStr = input.toString().split("");
    let numToStrL = numToStr.length;

    let sum = 0;
    let isTrue = true;

    for (const num of numToStr) {
        sum += Number(num);
    }

    for (let i = 1; i < numToStrL; i++) {
        if (numToStr[i] == numToStr[i -1]) {
            continue;
        } else {
            isTrue = false;
            break;
        }
    }

    if (isTrue) {
        console.log('true');
        console.log(sum);
    } else {
        console.log('false');
        console.log(sum);
    }
}
sameNumbers(2222222);
sameNumbers(1234);


function solve(input) {
    
    let inputNumber = input.toString()
    let isSame = true;
    let sumOfDigits = 0;
    let digitToCompare = inputNumber[0];
    let numberL = inputNumber.length

    for (let i = 0; i < numberL; i++) {
        sumOfDigits += Number(inputNumber[index])

        if (Number(inputNumber[index] !== digitToCompare) {
            isSame = false;
        }
    }
    console.log(isSame);
    console.log(sumOfDigits);
}