function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let min = Number.MIN_SAFE_INTEGER;

    while (command !== 'Stop') {
        let currentNumber = Number(command);
        
        if (currentNumber > min) {
            min = command;
        }
        command = input[index];
        index++;
    }
    console.log(min);
}
maxNumber(["1",
    "3",
    "-1",
    "-3",
    "Stop"]);