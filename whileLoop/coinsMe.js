function coins(input) {
    let sum = Number(input[0]);

    let moneyInCois = Math.floor(sum * 100);
    let counter = 0;

    while (moneyInCois > 0) {
        if (moneyInCois >= 200) {
            moneyInCois -= 200;
            counter++;
        } else if (moneyInCois >= 100) {
            moneyInCois -= 100;
            counter++;
        } else if (moneyInCois >= 50) {
            moneyInCois -= 50;
            counter++;
        } else if (moneyInCois >= 20) {
            moneyInCois -= 20;
            counter++;
        } else if (moneyInCois >= 10) {
            moneyInCois -= 10;
            counter++;
        } else if (moneyInCois >= 5) {
            moneyInCois -= 5;
            counter++;
        } else if (moneyInCois >= 2) {
            moneyInCois -= 2;
            counter++;
        } else {
            moneyInCois -= 1;
            counter++;
        }
    }

    console.log(counter);
}
coins(["0.59"]);