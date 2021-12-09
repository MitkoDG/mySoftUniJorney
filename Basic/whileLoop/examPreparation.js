function examPreparation(input){
    let index = 0;
    let countNegativeGrade = Number(input[index]);
    index++;

    let command = input[index];
    index++;

    let counter = 0;
    let sumScore = 0;
    let problemCounter = 0;
    let lastProblem = '';

    while (command !== 'Enough') {
        let taskName = command;
        let grade = Number(input[index]);
        index++;
        sumScore += grade;
        problemCounter++;
        lastProblem = taskName;

        if (grade <= 4) {
            counter++;
        }
        if (counter === countNegativeGrade) {
            console.log(`You need a break, ${countNegativeGrade} poor grades.`);
            break;
        }

        command = input[index];
        index++;
    }

    if (command === 'Enough') {
        let avgScore = sumScore /  problemCounter
        console.log(`Average score: ${avgScore.toFixed(2)}`);
        console.log(`Number of problems: ${problemCounter}`);
        console.log(`Last problem: ${lastProblem}`);
        
    }
}
examPreparation(["2",
"Income",
"3",
"Game Info",
"6",
"Best Player",
"4"])
;