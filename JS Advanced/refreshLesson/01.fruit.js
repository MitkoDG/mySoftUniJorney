function fruitCalc(fruit, weight, price) {
    let priceInKg = Number(weight / 1000);
    let total = Number(priceInKg * price);

    console.log(`I need $${total.toFixed(2)} to buy ${priceInKg.toFixed(2)} kilograms ${fruit}.`);
}
fruitCalc('orange', 2500, 1.80)
fruitCalc('apple', 1563, 2.35)