function addBags(input) {
    let index = 0;
    let priceBagsOver20 = Number(input[index]);
    index++;
    let kgBags = Number(input[index]);
    index++;
    let daysLeftToTrip = Number(input[index]);
    index++;
    let pcsBags = Number(input[index]);
    index++;


    if (kgBags < 10) {
        priceBagsOver20 = priceBagsOver20 * 0.20;
    } else if (kgBags >= 10 && kgBags <= 20) {
        priceBagsOver20 = priceBagsOver20 * 0.50;
    } else {
        priceBagsOver20 = priceBagsOver20;
    }

    let priceBags = priceBagsOver20 * pcsBags;
    let afterIncrease = 0

    if (daysLeftToTrip >= 31) {
        afterIncrease = priceBags * 1.10;
    } else if (daysLeftToTrip >= 7 ) {
        afterIncrease = priceBags * 1.15;
    } else {
        afterIncrease = priceBags * 1.40;
    }
    console.log(`The total price of bags is: ${afterIncrease.toFixed(2)} lv.`);
}
addBags(['63.80',//priceBagsOver20
    '23', //kgBags
    '3', // daysLeftToTrip
    '1' // pcsBags
]);