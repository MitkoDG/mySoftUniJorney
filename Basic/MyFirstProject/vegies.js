function market(input) {
    let priceKgVegy = Number(input[0]);
    let priceKgFruit = Number(input[1]);
    let totalKgVegy = Number(input[2]);
    let totalKgFruit = Number(input[3]);

    let totalvegy = priceKgVegy * totalKgVegy;
    let totalFruit = priceKgFruit * totalKgFruit;
    let incomeBG = totalvegy + totalFruit;
    let incomeEUR = incomeBG / 1.94;

    console.log(incomeEUR.toFixed(2));
}

market(['0.194','19.4','10','10']);