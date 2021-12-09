function numbersTo1(input) {

    let finalPower = Number(input[0]);
    
    for (let num = 0; num <= finalPower; num++) {
        if (num % 2 === 0) {
            console.log(Math.pow(2, num));
        }
    }

}
numbersTo1(['7']);