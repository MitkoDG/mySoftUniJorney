function operationBetweenNum(input) {
    let N1 = Number(input[0]);
    let N2 = Number(input[1]);
    let operator = input[2];

    result = 0;

    switch (operator) {
        case '+':
            result = N1 + N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;
        case '-':
            result = N1 - N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;

        case '*':
            result = N1 * N2;
            if (result % 2 === 0) {
                console.log(`${N1} ${operator} ${N2} = ${result} - even`);
            } else {
                console.log(`${N1} ${operator} ${N2} = ${result} - odd`);
            }
            break;
        case '/':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`); break;
            } else {
            result = (N1 / N2).toFixed(2); 
            console.log(`${N1} ${operator} ${N2} = ${result}`);
            break;
            }
        case '%':
            if (N2 === 0) {
                console.log(`Cannot divide ${N1} by zero`); break;
            } else {
            result = N1 % N2;
            console.log(`${N1} ${operator} ${N2} = ${result}`);
            break;
        }
    }
}
operationBetweenNum(["10",
"0",
"%"])
;