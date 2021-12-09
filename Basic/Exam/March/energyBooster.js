function energyBooster(input) {
    let fruit = input[0];
    let size = input[1];
    let setsNum = Number(input[2]);

    let price = 0;

    switch (fruit) {
        case 'Watermelon':
        if (size === 'small') {
            price = 56 * 2;
        } else {
            price = 28.70 * 5;
        }
            break;
        case 'Mango':
            if (size === 'small') {
                price = 36.66 * 2;
            } else {
                price = 19.60 * 5;
            }
            break;
        case 'Pineapple':
            if (size === 'small') {
                price = 42.10 * 2;
            } else {
                price = 24.80 * 5;
            }
            break;
        case 'Raspberry':
            if (size === 'small') {
                price = 20 * 2;
            } else {
                price = 15.20 * 5;
            }
            break;
    }
    let tempTotal = price * setsNum;
    if (tempTotal > 1000) {
        tempTotal = tempTotal * 0.50;
    } else if (tempTotal >= 400 && tempTotal <= 1000){
        tempTotal = tempTotal * 0.85;
    }

    console.log(`${tempTotal.toFixed(2)} lv.`);

}
energyBooster(['Raspberry',
    'small',
    '50'
]);