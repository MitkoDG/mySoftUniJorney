function flowers(input) {
    let boughtH = Number(input[0]);
    let boughtR = Number(input[1]);
    let boughtL = Number(input[2]);
    let season = input[3];
    let isItHoliday = input[4];

    let totalH = 0;
    let totalR = 0;
    let totalL = 0;
    let totalForBouquet = 0;

    let bouquet = boughtH + boughtR + boughtL;

    switch (season) {
        case 'Spring':
            totalH = boughtH * 2;
            totalR = boughtR * 4.10;
            totalL = boughtL * 2.50;
            totalForBouquet = totalH + totalL + totalR;
            if (isItHoliday === 'Y') {
                totalForBouquet = totalForBouquet * 1.15;
            }
            if (boughtL > 7) {
                totalForBouquet = totalForBouquet * 0.95;
            }
            break;
        case 'Summer':
            totalH = boughtH * 2;
            totalR = boughtR * 4.10;
            totalL = boughtL * 2.50;
            totalForBouquet = totalH + totalL + totalR;
            break;
        case 'Autumn':
            totalH = boughtH * 3.75;
            totalR = boughtR * 4.5;
            totalL = boughtL * 4.15;
            totalForBouquet = totalH + totalL + totalR;
            break;
        case 'Winter':
            totalH = boughtH * 3.75;
            totalR = boughtR * 4.5;
            totalL = boughtL * 4.15;
            totalForBouquet = totalH + totalL + totalR;
            if (isItHoliday === 'Y') {
                totalForBouquet = totalForBouquet * 1.15;
            }
            if (boughtR >= 10) {
                totalForBouquet = totalForBouquet * 0.90;
            }
            break;


    }
    if (bouquet > 20) {
        totalForBouquet = totalForBouquet * 0.80;
    }
    let totalAfter = totalForBouquet + 2;

    console.log(totalAfter.toFixed(2));
}

flowers(['10', '10', '10', 'Autumn', 'N']);