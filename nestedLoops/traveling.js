function traveling(input) {
    let index = 0;
    let command = input[index++];


    while (command !== 'End') {
        let destination = command;
        let budget = Number(input[index++]);
        let savedSum = 0

        while (budget >= savedSum) {
            let nextSum = Number(input[index++]);
            savedSum += nextSum;
            if (savedSum >= budget) {
                console.log(`Going to ${destination}!`);
                break;
            }
            nextSum = input[index];
        }
        command = input[index++];
    }
}
traveling(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"]);