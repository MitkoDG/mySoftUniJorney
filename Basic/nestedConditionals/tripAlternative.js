function skiHoliday(input) {
    let days = Number(input[0]);
    let roomType = input[1];
    let feedback = input[2];

    let nights = days - 1;
    let priceForAllNights = 0

    switch (roomType) {
        case 'room for one person':
            priceForAllNights = nights * 18;
            break;
        case 'apartment':
            if (nights < 10) {
                priceForAllNights = (nights * 25) * 0.70;
            } else if (nights >= 10 && nights <= 15) {
                priceForAllNights = (nights * 25) * 0.65;
            } else if (nights > 15) {
                priceForAllNights = (nights * 25) * 0.50;
            }
            break;
        case 'president apartment':
            if (nights < 10) {
                priceForAllNights = (nights * 35) * 0.90;
            } else if (nights >= 10 && nights <= 15) {
                priceForAllNights = (nights * 35) * 0.85;
            } else if (nights > 15) {
                priceForAllNights = (nights * 35) * 0.80;
            }
            break;
    }

    if (feedback === 'positive') {
        priceForAllNights = priceForAllNights * 1.25;
    } else if (feedback === 'negative') {
        priceForAllNights = priceForAllNights * 0.90;
    }


    console.log(`${priceForAllNights.toFixed(2)}`);
}
skiHoliday(["14", "apartment", "positive"]);