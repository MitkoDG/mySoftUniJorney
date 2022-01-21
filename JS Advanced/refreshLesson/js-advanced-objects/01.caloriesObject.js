function caloriesObject(input) {
    let productList = {};
    for (let i = 0; i < input.length; i+=2) {
        let product = input[i];
        let calorie = Number(input[i+1]);
        
        productList[product] = calorie;
    }

    console.log(productList);
}
caloriesObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52'])