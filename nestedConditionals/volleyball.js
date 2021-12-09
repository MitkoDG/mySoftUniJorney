function volleyBall(input) {
    let yearType = input[0];
    let holidays = Number(input[1]);
    let weekends = Number(input[2]);

    let weekendsSofia = (48 - weekends) *3 / 4;
    let gamesHolidays = holidays * 2 / 3;

    totalGamesOverall = weekendsSofia + gamesHolidays + weekends;

    if ( yearType === 'leap') {
        totalGamesOverall = totalGamesOverall * 1.15;
    } 

    console.log(Math.floor(totalGamesOverall));

}
volleyBall(["leap",
"0",
"1"])


