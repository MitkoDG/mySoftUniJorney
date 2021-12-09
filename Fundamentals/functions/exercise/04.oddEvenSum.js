function printResult(input) {
  let inputAsString = input.toString();
  let inputL = inputAsString.length;

  let takeOddSum = function (numAsString) {
    let oddSum = 0;
    for (let i = 0; i < inputL; i++) {
        let currentDigit = Number(numAsString[i]);
        if (currentDigit % 2 !== 0) {
            oddSum+=currentDigit
        }
    }
    return oddSum
  };
  let takeEvenSum = (numAsString) => {
    let evenSum = 0;
    for (let i = 0; i < inputL; i++) {
        let currentDigit = Number(numAsString[i]);
        if (currentDigit % 2 === 0) {
            evenSum+=currentDigit
        }
    }
    return evenSum
  };
  
  console.log(`Odd sum = ${takeOddSum(inputAsString)}, Even sum = ${takeEvenSum(inputAsString)}`);
}
printResult(1000435);
printResult(3495892137259234);  
