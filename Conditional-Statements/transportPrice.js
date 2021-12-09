function transportPrice(input) {
    let km = Number(input[0]);
    let dayTime = input[1];
    
    let taxiTariff = 0.79;
    let busTariff = 0.09;
    let trainTariff = 0.06;

    let totalPrice = 0;

    if (dayTime === 'night') {
        taxiTariff = 0.90;
    }

    if (km >= 100) {
        totalPrice = (km * trainTariff).toFixed(2);
    } else if (km >= 20) {
        totalPrice = (km * busTariff).toFixed(2);
    } else {
        totalPrice = (0.70 + km * taxiTariff).toFixed(2);
    }

    console.log(totalPrice);
}
transportPrice(['7','night']);