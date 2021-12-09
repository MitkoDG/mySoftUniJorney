function flowerShop(input) {
    let magnolia = Number(input[0]);
    let ziumbiul = Number(input[1]);
    let rozi = Number(input[2]);
    let kaktusi = Number(input[3]);
    let giftPrice = Number(input[4]);

    let magnoliaRevenue = magnolia * 3.25;
    let ziumbiulRevenue = ziumbiul * 4;
    let roziRevenue = rozi * 3.5;
    let kaktusiRevenue = kaktusi * 8;

    let totalForTheSale = (magnoliaRevenue + ziumbiulRevenue + roziRevenue + kaktusiRevenue) * 0.95;
    let leftAmount = Math.abs( totalForTheSale - giftPrice);

    if ( totalForTheSale >= giftPrice ) {
        console.log(`She is left with ${Math.floor(leftAmount)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(leftAmount)} leva.`);
    }
    
}
flowerShop(['15',
    '7',
    '5',
    '10',
    '100']);