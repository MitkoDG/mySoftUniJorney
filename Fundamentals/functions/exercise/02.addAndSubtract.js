function printResult(fNum, sNum, tNum) {
  function sumOfTwoNumbers(firstNum, secondNum) {
    return firstNum + secondNum;
  }

  function subtract(sum, lastNum) {
    return sum - lastNum;
  }

  let sum = sumOfTwoNumbers(fNum, sNum);

  let finalResult = subtract(sum, tNum);

  console.log(finalResult);
}
printResult(23, 6, 10);
