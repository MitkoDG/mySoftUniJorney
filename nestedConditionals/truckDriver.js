function truckDriver(input) {
    let season = input[0];
    let km = Number(input[1]);

    moneyForDriving = 0;
    switch (season) {
        case 'Spring':
        case 'Autumn':
        if (km <= 5000) {
            moneyForDriving = km * 0.75;
        } else if ( km <= 10000){
            moneyForDriving = km * 0.95;
        } else if ( km > 10000) {
            moneyForDriving = km * 1.45;
        }
            break;
        case 'Summer':
            if (km <= 5000) {
                moneyForDriving = km * 0.90;
            } else if ( km <= 10000){
                moneyForDriving = km * 1.10;
            } else if ( km > 10000) {
                moneyForDriving = km * 1.45;
            }
            break;
        case 'Winter':
            if (km <= 5000) {
                moneyForDriving = km * 1.05;
            } else if ( km <= 10000){
                moneyForDriving = km * 1.25;
            } else if ( km > 10000) {
                moneyForDriving = km * 1.45;
            }
            break;
    }
    let totalForTheSeason = moneyForDriving * 4;
    let afterTaxes = totalForTheSeason * 0.90;

    console.log(afterTaxes.toFixed(2));
}
truckDriver(['Summer',
    '3455'
]);