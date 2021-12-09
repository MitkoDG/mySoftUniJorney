function solve(input) {
  let numberAsString = input.toString();
  let sumOfDigits = 0;
  let stringL = numberAsString.length;

  for (let i = 0; i < stringL; i++) {
    let currentNumber = +numberAsString[i];
    sumOfDigits += currentNumber;
  }

  console.log(sumOfDigits);
}
solve(245678);

function solve(input) {
  let number = input;
  let lastDigit = (number / 10)%10;

  console.log(lastDigit);
}
solve(245678);
