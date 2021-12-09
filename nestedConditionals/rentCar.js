function rentCar(input) {

    let budget = Number(input[0]);
    let season = input[1];

    let carType = 0;
    classType = 0;
    carPrice = 0;

    switch (season) {
        case 'Summer':
            if (budget <= 100) {
                classType = 'Economy class';
                carType = 'Cabrio';
                carPrice = budget * 0.35;
            } else if (budget <= 500) {
                classType = 'Compact class';
                carType = 'Cabrio';
                carPrice = budget * 0.45;
            } else {
                classType = 'Luxury class';
                carType = 'Jeep';
                carPrice = budget * 0.90;
            }
            break;
        case 'Winter':
            if (budget <= 100) {
                classType = 'Economy class';
                carType = 'Jeep';
                carPrice = budget * 0.65;
            } else if (budget <= 500) {
                classType = 'Compact class';
                carType = 'Jeep';
                carPrice = budget * 0.80;
            } else {
                classType = 'Luxury class';
                carType = 'Jeep';
                carPrice = budget * 0.90;
            }
            break;
    }

    console.log(classType);
    console.log(`${carType} - ${carPrice.toFixed(2)}`);
}
rentCar(['99.99', 'Summer']);