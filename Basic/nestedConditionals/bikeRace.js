function bikeRace(input) {
    let juniors = Number(input[0]);
    let seniors = Number(input[1]);
    let roadType = input[2];

    let moneyFromJuniors = 0;
    let moneyFromSeniors = 0;

    switch(roadType){
        case 'trail': 
        moneyFromJuniors = juniors * 5.5;
        moneyFromSeniors = seniors * 7;
        break;

        case 'cross-country': 
        moneyFromJuniors = juniors * 8;
        moneyFromSeniors = seniors * 9.5;
        if ( (juniors + seniors) >= 50 ){
            moneyFromJuniors = moneyFromJuniors * 0.75;
            moneyFromSeniors = moneyFromSeniors * 0.75;
        }
        break;

        case 'downhill':
        moneyFromJuniors = juniors * 12.25;
        moneyFromSeniors = seniors * 13.75;
        break;

        case 'road': 
        moneyFromJuniors = juniors * 20;
        moneyFromSeniors = seniors * 21.50;
        break;
    }
    let afterTaxes = ((moneyFromJuniors + moneyFromSeniors) * 0.95).toFixed(2);
    console.log(afterTaxes);
}
bikeRace(['20',
    '25',
    'cross-country'
    ]);