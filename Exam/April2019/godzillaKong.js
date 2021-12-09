function godzillaKong(input) {
    let budget = Number(input[0]);
    let people = Number(input[1]);
    let clothesPrice = Number(input[2]);

    let decor = budget * 0.10;
    let totalForClothes = people * clothesPrice;
    if ( people > 150 ) {
        totalForClothes = totalForClothes * 0.90;
    }
    let finalPrice = totalForClothes + decor;

    if (finalPrice > budget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(finalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!" );
        console.log(`Wingard starts filming with ${(budget - finalPrice).toFixed(2)} leva left.`);
    }
}
godzillaKong(['20000', 
    '120',
    '55.5']);