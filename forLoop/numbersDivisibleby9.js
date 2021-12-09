function divisibleBy(input) {
    let startN = Number(input[0]);
    let stopN = Number(input[1]);
    // let index = 0;
    // let n = Number(input[index]);
    // index++;

    let sum = 0;

    for (let num = startN; num <= stopN; num++) {
        if (num % 9 === 0) {
            sum += num;
        }
    }
    console.log(`The sum: ${sum}`)

    for (let num = startN; num <= stopN; num++) {
        if (num % 9 === 0) {
            let numm = num;
            console.log(numm);
        }
    }
    
}
divisibleBy(["100", "200"]);