function nestedLoops(input) {
    let startInterval = Number(input[0]);//1
    let endInterval = Number(input[1]);//10
    let magicNumber = Number(input[2]);//5
    let combinationsCointer = 0;
    let isFound = false;

    for (let i = startInterval; i <= endInterval; i++) {
        for (let j = startInterval; j <= endInterval; j++) {
            combinationsCointer++;
            if (i + j === magicNumber) {
                console.log(`Combination N:${combinationsCointer} (${i} + ${j} = ${magicNumber})`);
                isFound = true;
                return;
            }
        }
    }
    if (!isFound) {
        console.log(`${combinationsCointer} combinations - neither equals ${magicNumber}`);
    }
}
nestedLoops(["1", "10", "5"]);