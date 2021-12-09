function maxNumber(input) {
    let index = 0;
    let command = input[index];
    index++;

    let max = Number.MAX_SAFE_INTEGER;

    while (command !== 'Stop') {
        let currentNumber = Number(command);
        
        if (currentNumber < max) {
            max = command;
        }
        command = input[index];
        index++;
    }
    console.log(max);
}
maxNumber(["-1",
"-2",
"Stop"]);