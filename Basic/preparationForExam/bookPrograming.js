function programmingBook(input) {
 
    let priceForOnePage = Number(input[0]);
    let priceForOneKOrica = Number(input[1]);
    let generalDiscont = Number(input[2])
    let sumForDisiner = Number(input[3]);
    let procentForTeam = Number(input[4]);

    let startSumForPrint = (priceForOnePage * 899) + (priceForOneKOrica * 2);


    let discont = startSumForPrint - (startSumForPrint * generalDiscont / 100);

    let moneyForDisiner = discont + sumForDisiner;

    let teamProcentProfit = moneyForDisiner - (moneyForDisiner * procentForTeam / 100);

    console.log(`Avtonom should pay ${teamProcentProfit.toFixed(2)} BGN.`);
}

programmingBook(["0.05",
"1.20",
"40",
"19.99",
"20"]);