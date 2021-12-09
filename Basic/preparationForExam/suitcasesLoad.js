function suitcasesLoad(input) {
    let index = 0;
    let capacity = Number(input[index++]);
    let currentInput = input[index++];

    let laggageSpace = 0;
    let laggageNum = 0;

    while (currentInput !== 'End') {
        let laggage = Number(currentInput);
        laggageNum++;

        if (laggageNum % 3 === 0) {
            laggageSpace += laggage * 1.10;
        } else {
            laggageSpace += laggage;
        }

        if (laggageSpace > capacity) {
            console.log("No more space!");
            console.log(`Statistic: ${laggageNum - 1} suitcases loaded.`);
            return;
            // to do
        }
        currentInput= input[index++];
    }


    console.log("Congratulations! All suitcases are loaded!");
    console.log(`Statistic: ${laggageNum} suitcases loaded.`);

}
suitcasesLoad(["700.5",
"180",
"340.6",
"126",
"220"])
;