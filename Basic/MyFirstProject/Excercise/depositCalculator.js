function depositCalculator(input){
    let depositAmount = Number(input[0]);
    let term = Number(input[1]);
    let annualInterestRate = Number(input[2]);
    // сума = депозирана сума  + срок на депозита * ((депозирана сума * годишен лихвен процент ) / 12)
    let interestRate = depositAmount * (annualInterestRate / 100);
    let forOneMonth = interestRate / 12;
    let sum= depositAmount + (term * forOneMonth);

    console.log(sum);
}

depositCalculator(["200","3","5.7"])