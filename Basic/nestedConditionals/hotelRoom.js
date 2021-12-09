function hotelRoom(input) {
    let month = input[0];
    let numNights = Number(input[1]);

    let total = 0;
    let apartmentPrice = 0;
    let studioPrice = 0;

    switch (month) {
        case 'May':
        case 'October':
            studioPrice = numNights * 50;
            apartmentPrice = numNights * 65;
            if (numNights > 7 && numNights <= 14 ) {
                studioPrice = studioPrice * 0.95;
            } else if (numNights > 14) {
                studioPrice = studioPrice * 0.70;
            }

            if (numNights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;

        case 'June': ;
        case 'September': ;
            studioPrice = numNights * 75.20;
            apartmentPrice = numNights * 68.70;
            if (numNights > 14) {
                studioPrice = studioPrice * 0.80;
            }
            if (numNights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;

        case 'July':
        case 'August':
            studioPrice = numNights * 76;
            apartmentPrice = numNights * 77;
            if (numNights > 14) {
                apartmentPrice = apartmentPrice * 0.90;
            }
            break;
    }

    console.log(`Apartment: ${apartmentPrice.toFixed(2)} lv.`);
    console.log(`Studio: ${studioPrice.toFixed(2)} lv.`);
}
hotelRoom(["May", "15"]);