function sumOfNum(input) {

    let sum = 0;
    let forSum = input[0];
    let numL = forSum.length;

    for (let i = 0; i < numL; i++) {
        sum += Number(forSum[i]);

    }
    console.log(`The sum of the digits is:${sum}`);

}
sumOfNum(["564891"]);