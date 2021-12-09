function multiplicationTable(input) {
    index = 0;
    let num = Number(input[index]);


    for (let i = 0; ; i++) {
        let multyNum = Number(input[index]);
        index++;

        if (multyNum < 0) {
            console.log(`Negative number!`);
            break;
        } else {
            console.log(`Result: ${(multyNum * 2).toFixed(2)}`);
        }
    }
}
multiplicationTable(['23.43',
    '12.3245',
    '0',
    '65.23432',
    '-20'
]);