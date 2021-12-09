function graduationPt(input) {
    let index = 0;
    let name = input[index];
    index++;
    // let grade = Number(input[index]);
    // index++;

    let counterClass = 0;
    let totalClasses = input.length; // to check
    let sumGrade = 0;

    for (let clases = 0; clases < totalClasses; clases++) {
        let grade = Number(input[index]);
        counterClass++;
        sumGrade += grade;
        if (grade < 4) {
            console.log(`${name} has been excluded at ${counterClass} grade`);
            break;
        }
        let avgScore = (sumGrade / counterClass).toFixed(2);
        if (counterClass === 12) {
            console.log(`${name} graduated. Average grade: ${avgScore}`);
        }


        grade = Number(input[index]);
        index++;
    }

}
graduationPt(["Gosho",
    "5",
    "5.5",
    "6",
    "5.43",
    "5.5",
    "6",
    "5.55",
    "5",
    "6",
    "6",
    "5.43",
    "5"]);