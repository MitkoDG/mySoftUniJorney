function coins(input) {
    let money = Number(input[0]);
    let moneyInCois = Math.floor(money * 100);
    let counter = 0;

    while (moneyInCois > 0) {
        if (moneyInCois >= 200) {
            counter++;
            moneyInCois -= 200;
        } else if (moneyInCois >= 100) {
            counter++;
            moneyInCois -= 100;
        } else if (moneyInCois >= 50) {
            counter++;
            moneyInCois -= 50;
        } else if (moneyInCois >= 20) {
            counter++;
            moneyInCois -= 20;
        } else if (moneyInCois >= 10) {
            counter++;
            moneyInCois -= 10;
        } else if (moneyInCois >= 5) {
            counter++;
            moneyInCois -= 5;
        } else if (moneyInCois >= 2) {
            counter++;
            moneyInCois -= 2;
        } else {
            counter++;
            moneyInCois -= 1;
        }
    }

    console.log(counter);


}
coins(["1.23"]);