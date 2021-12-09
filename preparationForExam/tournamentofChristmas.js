function tournamentofChristmas(input) {
    let index = 0;
    let totalDays = Number(input[index++]);

    let totalWins = 0;
    let totalLosses = 0;
    let totalMoney = 0;
    let command = input[index++];

    for (let i = 1; i <= totalDays; i++) {
        let counterWins = 0;
        let counterLosses = 0;
        let moneyEndOfTheDay = 0;


        while (command !== 'Finish') {
            let currentSport = command;
            let result = input[index++];

            switch (result) {
                case 'win':
                    counterWins++;
                    moneyEndOfTheDay += 20;
                    break;
                case 'lose':
                    counterLosses++;
                    break;
            }
            command= input[index++];
        }
        if (counterWins > counterLosses) {
            moneyEndOfTheDay *= 1.10;

        }
        totalWins += counterWins;
        totalLosses += counterLosses;
        totalMoney += moneyEndOfTheDay;
        console.log(totalMoney);
    }
    // if (totalWins > totalLosses) {
    //     totalMoney *= 1.20;
    // }


    console.log(totalMoney);

}
tournamentofChristmas(["2",
    "volleyball",
    "win",
    "football",
    "lose",
    "basketball",
    "win",
    "Finish",
    "golf",
    "win",
    "tennis",
    "win",
    "badminton",
    "win",
    "Finish"]);