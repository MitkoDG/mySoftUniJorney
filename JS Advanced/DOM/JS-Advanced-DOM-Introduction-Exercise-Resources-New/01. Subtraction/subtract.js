function subtract() {
    let firstNumber = document.getElementById('firstNumber') // .value works only getting info from input  line
    let firstNumberAsNumber = Number(firstNumber.value);
    let secondNumber = document.getElementById('secondNumber');
    let secondNumberAsNumber = Number(secondNumber.value);

    let result = firstNumberAsNumber - secondNumberAsNumber;
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}