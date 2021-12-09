function pastryShop(input) {
    let sweetType = input[0];
    let orderedSweets = Number(input[1]);
    let day = Number(input[2]);

    let price = 0;

    if (day <= 15) {
        switch (sweetType) {
            case 'Cake':
                price = 24;
                break;
            case 'Souffle':
                price = 6.66;
                break;
            case 'Baklava':
                price = 12.60;
                break;

        }
    } else {
        switch (sweetType) {
            case 'Cake':
                price = 28.70;
                break;
            case 'Souffle':
                price = 9.80;
                break;
            case 'Baklava':
                price = 16.98;
                break;
        }
    }
    let totalForOrder = orderedSweets * price;

    if (day <= 22) {
        if (totalForOrder > 100 && totalForOrder < 200) {
            totalForOrder = totalForOrder * 0.85;
        } else if (totalForOrder > 200) {
            totalForOrder = totalForOrder * 0.75;
        }
    }

    if (day <= 15) {
        totalForOrder = totalForOrder * 0.90;
    }

    console.log(totalForOrder.toFixed(2));
}
pastryShop(["Souffle",
    "20",
    "24"])

