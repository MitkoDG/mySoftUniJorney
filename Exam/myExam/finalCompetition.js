function finalCompetition(input) {
    let numDancers = Number(input[0]);
    let points = Number(input[1]);
    let season = input[2];
    let place = input[3];

    let money = 0;

    switch (place) {
        case 'Bulgaria':
            money = numDancers * points;
            if (season === 'summer') {
                money = money * 0.95;
            } else if ( season === 'winter') {
                money = money * 0.92; 
            }

            break;
        case 'Abroad':
            money = (numDancers * points) * 1.50;
            if (season === 'summer') {
                money = money * 0.90;
            } else if ( season === 'winter') {
                money = money * 0.85; 
            }
            break;
    }

    let charity = money * 0.75;
    let afterCharity = money - charity;
    let moneyPerDancer = afterCharity / numDancers;

    console.log(`Charity - ${charity.toFixed(2)}`);
    console.log(`Money per dancer - ${moneyPerDancer.toFixed(2)}`);
}
finalCompetition(["25",
"98",
"winter",
"Bulgaria"])
;