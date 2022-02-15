class Restaurant {

    constructor(budget) {
        this.budget = budget;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }
    loadProducts(products) {
        for (const nextProd of products) {
            let [productName, productQuantity, productTotalPrice] = nextProd.split(' ');
            let price = Number(productTotalPrice);
            if ("There was not enough money to load {productQuantity} {productName}") {
                this.budget -= price;

                if (this.stockProducts[productName]) {
                    this.stockProducts[productName] += productQuantity;
                } else {
                    this.stockProducts[productName] = productQuantity;
                }
                this.history.push(`Successfully loaded ${productQuantity} ${productName}`);
            } else {
                console.log(this.stockProducts);

                this.history.push(`There was not enough money to load ${productQuantity} ${productName}`);
            }
        }
        return this.history.join('\n');
    }
    
    addToMenu(meal, products, priceS){
        let price = Number(priceS);
        let [productName, productQuantity] = products.split(' ');
        if (!this.menu[meal]) {
            this.menu[meal] = productName;
            this.menu[meal] = price;
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }


    }



}
console.log('----Input 4 -----');
let kitchen = new Restaurant(1000);
kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));

console.log('----Input 1 -----');

// let kitchen = new Restaurant(1000);
// console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));
