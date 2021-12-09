function bigSale(input) {
    let tripPrice = Number(input[0]);
    let puzzelPcs = Number(input[1]);
    let speakDollPcs = Number(input[2]);
    let teddyBearPcs = Number(input[3]);
    let minionPcs = Number(input[4]);
    let truckPcs = Number(input[5]);

    let totalSum = (puzzelPcs * 2.60) + (speakDollPcs * 3.00) + ( teddyBearPcs * 4.10 ) + (minionPcs * 8.20) + (truckPcs * 2.00)
    let totalOrdered = puzzelPcs + speakDollPcs + teddyBearPcs + minionPcs + truckPcs
    if (totalOrdered >= 50 ) {
      totalSum = totalSum * 0.75
    }
    let afterTheTaxes = (totalSum * 0.90);

    if ( afterTheTaxes >= input[0]){
        console.log(`Yes! ${(afterTheTaxes - tripPrice).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(tripPrice - afterTheTaxes).toFixed(2)} lv needed.`)
    }
}
bigSale(["320", "8", "2", "5", "5", "1"])