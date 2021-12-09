function matchTikets(input) {
    let budget = Number(input[0]);
    let tiketCategory = input[1];
    let groupPoeple = Number(input[2]);

    let moneyForTransport = 0;
    tiketPrice = 0;

    if (groupPoeple <= 4 && groupPoeple >= 1) {
        moneyForTransport = budget * 0.75;
    } else if (groupPoeple >= 5 && groupPoeple <= 9) {
        moneyForTransport = budget * 0.60;
    } else if (groupPoeple >= 10 && groupPoeple <= 24) {
        moneyForTransport = budget * 0.50;
    } else if (groupPoeple >= 25 && groupPoeple <= 49) {
        moneyForTransport = budget * 0.40;
    } else {
        moneyForTransport = budget * 0.25;
    }

    if (tiketCategory === 'VIP') {
        tiketPrice = groupPoeple * 499.99;
    } else if (tiketCategory === 'Normal') {
        tiketPrice = groupPoeple * 249.99;
    }
    let leftMoney = budget - moneyForTransport;
    let total = budget - moneyForTransport - tiketPrice;
    if (tontal >= 0) {
        console.log(`Yes! You have ${total.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${Math.abs(total).toFixed(2)} leva.`);
    }
}
matchTikets(['50000',
    'Normal',
    '200'
]);