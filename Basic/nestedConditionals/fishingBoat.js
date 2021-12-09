function fishingBoat(input) {

    let budget = Number(input[0]);
    let season = input[1];
    let numFisher = Number(input[2]);

    let needMoney = 0;
    // "Spring", "Summer", "Autumn", "Winter"
    switch (season) {
        case "Spring":
            needMoney = 3000;
            if (numFisher <= 6) {
                needMoney = needMoney * 0.90;
            } else if (numFisher >= 7 && numFisher <= 11) {
                needMoney = needMoney * 0.85;
            } else {
                needMoney = needMoney * 0.75;
            }
            break;

        case "Summer":
        case "Autumn":
            needMoney = 4200;
            if (numFisher <= 6) {
                needMoney = needMoney * 0.90;
            } else if (numFisher >= 7 && numFisher <= 11) {
                needMoney = needMoney * 0.85;
            } else {
                needMoney = needMoney * 0.75;
            }
            break;
        case "Winter":
            needMoney = 2600;
            if (numFisher <= 6) {
                needMoney = needMoney * 0.90;
            } else if (numFisher >= 7 && numFisher <= 11) {
                needMoney = needMoney * 0.85;
            } else {
                needMoney = needMoney * 0.75;
            }
            break;
    }
    if (numFisher % 2 === 0 && season !== 'Autumn') {
        needMoney = needMoney * 0.95;
    }
    let diff = Math.abs(budget - needMoney);

    if (budget >= needMoney) {
        console.log(`Yes! You have ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva.`);
    }
}
fishingBoat(["3600",
"Autumn",
"6"])
;