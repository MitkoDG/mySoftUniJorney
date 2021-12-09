function aluminumJoinery(input) {
    let index = 0;
    let pcs = input[index];
    index++;
    let type = input[index];
    index++;
    let delivery = input[index];
    index++;

    let price = 0;
    let isValid = true;

    if (pcs < 10) {
        console.log('Invalid order');
        isValid = false;
    }
    switch (type) {
        case '90X130':
            price = 110;
            if (pcs > 60) {
                price = price * 0.92;
            } else if (pcs > 30) {
                price = price * 0.95;
            }
            break;

        case '100X150':
            price = 140;
            if (pcs > 80) {
                price = price * 0.90;
            } else if (pcs > 40) {
                price = price * 0.94;
            }

            break;

        case '130X180':
            price = 190;
            if (pcs > 50) {
                price = price * 0.88;
            } else if (pcs > 20) {
                price = price * 0.93;
            }
            break;

        case '200X300':
            price = 250;
            if (pcs > 50) {
                price = price * 0.86;
            } else if (pcs > 25) {
                price = price * 0.91;
            }
            break;
    }

    let priceAfter = price * pcs;

    switch (delivery) {
        case 'With delivery':
            priceAfter = priceAfter + 60;
            break;

        default:
            break;
    }

    if (pcs > 99) {
        priceAfter = priceAfter * 0.96;
    }
    if (isValid) {
        console.log(`${priceAfter.toFixed(2)} BGN`);
    }
}
aluminumJoinery(['2', '130X180', 'With delivery']);
