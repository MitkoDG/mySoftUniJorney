function trainTheTrainers(input) {
    let index = 0;
    let n = Number(input[index++]);

    let command = input[index++];
    let avgGrade = 0;
    let presentationCounter = 0;
    while (command !== 'Finish') {
        let presentetionName = command;
        let tempAvgGrade = 0;
        let tempSumOfGrade = 0;
        presentationCounter++;
        for (let i = 0; i < n; i++) {
            let grade = Number(input[index++]);
            tempSumOfGrade += grade;
        }
        tempAvgGrade = tempSumOfGrade / n;
        avgGrade += tempAvgGrade;
        console.log(`${presentetionName} - ${tempAvgGrade.toFixed(2)}.`);
        command = input[index++]
    }
    avgGrade = avgGrade / presentationCounter;
    console.log(`Student's final assessment is ${avgGrade.toFixed(2)}.`);
}
trainTheTrainers(["3",
"Arrays",
"4.53",
"5.23",
"5.00",
"Lists",
"5.83",
"6.00",
"5.42",
"Finish"]);