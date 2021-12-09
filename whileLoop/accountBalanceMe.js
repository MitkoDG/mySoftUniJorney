function account(input) {
    let sum = 0;
    let index = 0;
    let command = input[0];
    index++;
    
    while (command !== 'NoMoreMoney') {
        let currentMoney = Number(command);
        if (currentMoney < 0) {
            console.log("Invalid operation!");
            break;
        }
        sum += currentMoney;
        console.log(`Increase: ${currentMoney.toFixed(2)}`);

        command = input[index];
        index++;
    }
    console.log(`Total: ${sum}`);
}
account(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"]);