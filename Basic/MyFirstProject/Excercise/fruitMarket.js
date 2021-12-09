function fruitMarket(input) {
    let priceQgodi = Number(input[0]);
    let bananasQty = Number(input[1]);
    let orangesQty = Number(input[2]);
    let maliniQty = Number(input[3]);
    let qgodiQty = Number(input[4]);

    let maliniPrice = priceQgodi / 2;
    let orangesPrice = maliniPrice - ( maliniPrice * 0.40);
    let bananasPrice = maliniPrice - (maliniPrice * 0.80);
    let sumMalini = maliniPrice * maliniQty;
    let sumOrange = orangesPrice * orangesQty;
    let sumBanana = bananasPrice * bananasQty;
    let sumQgodi = qgodiQty * priceQgodi;


    let totalSum = sumMalini + sumOrange + sumBanana + sumQgodi;
    console.log(totalSum.toFixed(2));
}
fruitMarket(["48","10","3.3","6.5","1.7"]);
