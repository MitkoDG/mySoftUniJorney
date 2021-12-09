function braceletStand(input) {
    let poketMoney = Number(input[0]);
    let earnedMoneyPerDay = Number(input[1]);
    let expenses = Number(input[2]);
    let giftPrice = Number(input[3]);

    let savedMoney = poketMoney * 5;
    let earnedMoneyTotal = earnedMoneyPerDay * 5;
    let totalEarned = savedMoney + earnedMoneyTotal;
    let afterExpenses = totalEarned - expenses;
    let insufficient = giftPrice - afterExpenses;

    if (afterExpenses >= giftPrice) {
        console.log(`Profit: ${afterExpenses.toFixed(2)} BGN, the gift has been purchased.`);
    } else {
        console.log(`Insufficient money: ${insufficient.toFixed(2)} BGN.`);
    }


}
braceletStand(["5.12",
"32.05",
"15",
"150"]);