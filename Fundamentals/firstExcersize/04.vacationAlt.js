function solve(a, b, c) {

    let numberOfPeople = Number(a);
    let type = b;
    let dayOfWeek = c;

    let price = 0;
    let discount = 0;

    if (type === "Students") {
        switch (dayOfWeek) {
            case "Friday":
                price = numberOfPeople * 8.45;
                break;
            case "Saturday":
                price = numberOfPeople * 9.8;
                break;
            case "Sunday":
                price = numberOfPeople * 10.46;
                break;
        }

        if (numberOfPeople >= 30) {
            discount = price * 0.15;
            price = price - discount;
        }

    }
    else if (type === "Business") {
        switch (dayOfWeek) {
            case "Friday":
                price = numberOfPeople * 10.9;
                break;
            case "Saturday":
                price = numberOfPeople * 15.6;
                break;
            case "Sunday":
                price = numberOfPeople * 16;
                break;
        }

        if (numberOfPeople >= 100) {
            if (dayOfWeek === "Friday") {
                discount = 10 * 10.9;
            }
            else if (dayOfWeek === "Saturday") {
                discount = 10 * 15.6;
            }
            else {
                discount = 10 * 16;
            }
            price = price - discount;
        }

    }
    else if (type === "Regular") {
        switch (dayOfWeek) {
            case "Friday":
                price = numberOfPeople * 15;
                break;
            case "Saturday":
                price = numberOfPeople * 20;
                break;
            case "Sunday":
                price = numberOfPeople * 22.5;
                break;
        }

        if (numberOfPeople >= 10 && numberOfPeople <= 20) {
            discount = price * 0.05;
            price = price - discount;
        }
    }

    console.log(`Total price: ${price.toFixed(2)}`);

}