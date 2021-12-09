function highJump(input) {
    let index = 0;
    let desireHigh = Number(input[index++]);
    let goal = desireHigh - 30;
    let jumpCount = 0;
    let totalJumps = input.length;
    let numTry = 0;
    let isSuccess = false;

    for (let jumps = 0; jumps < totalJumps; jumps++) {
        // while (goal <= desireHigh) {
        let currentJump = Number(input[index++]);
        jumpCount++;


        if (goal >= desireHigh) {
            console.log(`Tihomir succeeded, he jumped over ${goal}cm after ${jumpCount} jumps.`);
            isSuccess = true;
            break;
        }
        if (currentJump > goal) {
            goal += 5;
            numTry = 0;
        } else {
            numTry++;
        }
        if (numTry === 3) {
            // jumpCount--;
            break;
        }

        currentJump = Number(input[index]);
        // }
    }
    if (!isSuccess) {
        console.log(`Tihomir failed at ${goal}cm after ${jumpCount} jumps.`);
    }


}
highJump(["250",
    "225",
    "224",
    "225",
    "228",
    "231",
    "235",
    "234",
    "235"]);