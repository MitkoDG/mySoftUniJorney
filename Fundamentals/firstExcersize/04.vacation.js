function solve(a, b, c) {
    let num = Number(a)
    let type = b
    let day = c

    let price = 0

    if (type === "Students") {
        switch (day) {
            case 'Friday': price = 8.45;
                break;
            case 'Saturday': price = 9.80;
                break;
            case 'Sunday': price = 10.46;
                break;
        }
        if (num >= 30) {
            price = price * 0.85;
        }
    }
    if (type === "Business") {
        switch (day) {
            case 'Friday': price = 10.90;
                break;
            case 'Saturday': price = 15.60;
                break;
            case 'Sunday': price = 16;
                break;
        }
        if (num >= 100) {
            price = price - (price * 10)
        }
    }
    if (type === "Regular") {
        switch (day) {
            case 'Friday': price = 15;
                break;
            case 'Saturday': price = 20;
                break;
            case 'Sunday': price = 22.50;
                break;
        }
        if (num >= 10 && num <= 20) {
            price = price * 0.95
        }
    }
    console.log(price.toFixed(2));
}
solve(40,
    "Regular",
    "Saturday"
    )