function solve(input) {

    let shirtPrice = Number(input[0]);
    let moneyTarget = Number(input[1]);
    let shortsPrice = shirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;

    let shoesPrice = (shirtPrice + shortsPrice) * 2;

    let totalSum = shirtPrice + shortsPrice + socksPrice + shoesPrice;
    let totalSumAfterDiscount = totalSum * 0.85;

    if (totalSumAfterDiscount >= moneyTarget) {
        console.log("Yes, he will earn the world-cup replica ball!");
        console.log(`His sum is ${totalSumAfterDiscount.toFixed(2)} lv.`);

    } else {
        console.log("No, he will not earn the world-cup replica ball.");
        console.log(`He needs ${(moneyTarget - totalSumAfterDiscount).toFixed(2)} lv. more.`);
    }
}
solve(["55",
    "310"]);