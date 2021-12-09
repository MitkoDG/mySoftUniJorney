function solve(input) {
 
    let days = Number(input[0]);
    let donations = 0;
    let counterWin = 0;
    let counterLose = 0;
    let index = 1;
 
    for (let i = 1; i <= days; i++) {
        let command = input[index++];
        let win = 0;
        let lose = 0;
        let dayDonations = 0;
 
        while (command !== "Finish") {
            let rate = input[index++];
            switch (rate) {
                case "win": dayDonations += 20;
                    counterWin++;
                    win++;
                    break;
                case "lose":
                    counterLose++;
                    lose++;
                    break;
                case "Finish": break;
            }
            command = input[index++];
        }
        if (win > lose) {
            dayDonations *= 1.1;
            donations += dayDonations;
        } else {
            donations += dayDonations;
        }
    }
 
    if (counterWin > counterLose) {
        donations *= 1.2;
        console.log(`You won the tournament! Total raised money: ${donations.toFixed(2)}`);
    } else {
        console.log(`You lost the tournament! Total raised money: ${donations.toFixed(2)}`);
    }
 
}