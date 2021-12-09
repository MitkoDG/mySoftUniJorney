function fullTank(input) {
    let typeOfFuel = input[0];
    let qtyLiters = Number(input[1]);
    let discountCard = input(2);
    //let totalFuel = 0;

    if (typeOfFuel === "Gas" && discountCard === "Yes") {
        let totalFuel = qtyLiters * 0.93;
        if (qtyLiters > 25) {
            let afterDiscount = totalGas * 0.90;
            console.log('afterDiscount lv.');
        } else if (qtyLiters > 20) {
            let afterDiscount = totalGas * 0.92;
            console.log('afterDiscount lv.');
        } else {
            console.log(totalGas);
        }
    }
}
fullTank(['Gas', '30', 'Yes']);