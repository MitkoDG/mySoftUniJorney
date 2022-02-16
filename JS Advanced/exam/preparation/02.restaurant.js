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
            productQuantity = Number(productQuantity);
            productTotalPrice = Number(productTotalPrice);
            if (this.budget >= productTotalPrice) {
                this.budget -= productTotalPrice;

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

    addToMenu(meal, products, price) {

        // menu{
        //     meal{
        //         product: qty
        //     }
        // }



        price = Number(price);
        if (!this.menu[meal]) {
            for (let prod of products) {
                let [productName, productQuantity] = prod.split(' ');
                productQuantity = Number(productQuantity);
                this.menu[meal] = [productName, price];

            }
            console.log(this.menu[meal]);
        } else {
            return `The ${meal} is already in the our menu, try something different.`
        }
        let numOfMeals = Object.keys(this.menu).length

    }

    showTheMenu(){

        let mealL = Object.keys(this.menu);
        if (!mealL) {
            return 'Our menu is not ready yet, please come later...'
        } else {
            let menuList = [];
            for (const m in menu) {
                menuList.push(`${m} - $ ${m.price}'\n'`)
            }
        }
    }

    makeTheOrder(meal){
        if (!this.menu[meal]) {
            throw new Error(`There is not ${meal} yet in our menu, do you want to order something else?`)
        }

    }



}
// console.log('----Input 1 -----');

// let kitchen = new Restaurant(1000);
// console.log(kitchen.loadProducts(['Banana 10 5', 'Banana 20 10', 'Strawberries 50 30', 'Yogurt 10 10', 'Yogurt 500 1500', 'Honey 5 50']));

console.log('----Input 2 -----');
let kitchen = new Restaurant(1000);
console.log(kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99));
// console.log(kitchen.addToMenu('Pizza', ['Flour 0.5', 'Oil 0.2', 'Yeast 0.5', 'Salt 0.1', 'Sugar 0.1', 'Tomato sauce 0.5', 'Pepperoni 1', 'Cheese 1.5'], 15.55));

// console.log('----Input 4 -----');
// let kitchen = new Restaurant(1000);
// kitchen.loadProducts(['Yogurt 30 3', 'Honey 50 4', 'Strawberries 20 10', 'Banana 5 1']);
// kitchen.addToMenu('frozenYogurt', ['Yogurt 1', 'Honey 1', 'Banana 1', 'Strawberries 10'], 9.99);
// console.log(kitchen.makeTheOrder('frozenYogurt'));


// alternative way
// class Restaurant {
//     constructor(budget) {
//         this.budgetMoney = Number(budget);
//         this.menu = {};
//         this.stockProducts = {};
//         this.history = [];
//     }

//     loadProducts(productArr) {
//         for (let strSequence of productArr) {
//             let [product, quantity, price] = strSequence.split(' ');
//             quantity = Number(quantity);
//             price = Number(price);

//             if (price <= this.budgetMoney) {
//                 this.budgetMoney -= price;
//                 this.history.push(`Successfully loaded ${quantity} ${product}`);

//                 if (!this.stockProducts.hasOwnProperty(product)) {
//                     this.stockProducts[product] = 0;
//                 }
//                 this.stockProducts[product] += quantity;
//             } else {
//                 this.history.push(
//                     `There was not enough money to load ${quantity} ${product}`
//                 );
//             }
//         }

//         return this.history.join('\n');
//     }

//     addToMenu(meal, productArr, price) {
//         let neededProducts = [];

//         for (let strSequence of productArr) {
//             let [product, quantity] = strSequence.split(' ');
//             quantity = Number(quantity);

//             neededProducts.push([product, quantity]);
//         }

//         if (this.menu.hasOwnProperty(meal)) {
//             return `The ${meal} is already in the our menu, try something different.`;
//         }

//         this.menu[meal] = { products: neededProducts, price };
//         let mealCount = Object.keys(this.menu).length;

//         if (mealCount == 1) {
//             return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`;
//         } else if (!mealCount || mealCount >= 2) {
//             return `Great idea! Now with the ${meal} we have ${mealCount} meals in the menu, other ideas?`;
//         }
//     }

//     showTheMenu() {
//         let menuEntries = Object.entries(this.menu);
//         let mealCount = menuEntries.length;

//         if (!mealCount) {
//             return 'Our menu is not ready yet, please come later...';
//         }

//         let stringArr = [];
//         for (let [meal, mealInfoObj] of menuEntries) {
//             stringArr.push(`${meal} - $ ${mealInfoObj.price}`);
//         }

//         return stringArr.join('\n');
//     }

//     makeTheOrder(meal) {
//         if (!this.menu.hasOwnProperty(meal)) {
//             return `There is not ${meal} yet in our menu, do you want to order something else?`;
//         }

//         for (let meal in this.menu) {
//             let products = this.menu[meal].products;
//             for (let [product, quantity] of products) {
//                 if (!this.stockProducts.hasOwnProperty(product)) {
//                     return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
//                 }

//                 if (this.stockProducts[product] < quantity) {
//                     return `For the time being, we cannot complete your order (${meal}), we are very sorry...`;
//                 }
//             }

//             products.forEach(([product, quantity]) => {
//                 this.stockProducts[product] - quantity;
//             });

//             this.budgetMoney += this.menu[meal].price;
//             return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`;
//         }
//     }
// }

// alternative way
class Restaurant{
    constructor(budgetMoney) {
        this.budgetMoney = budgetMoney;
        this.menu = {};
        this.stockProducts = {};
        this.history = [];
    }

    loadProducts(products){
        for (let product of products) {
            let [name, quantity, price] = product.split(' ');
            quantity = Number(quantity)
            price = Number(price);

            if (this.budgetMoney >= price){
                if (!this.stockProducts.hasOwnProperty(name)){
                    this.stockProducts[name] = quantity;
                    this.budgetMoney -= price;
                }
                else{
                    this.stockProducts[name] += quantity;
                    this.budgetMoney -= price;
                }
                this.history.push(`Successfully loaded ${quantity} ${name}`);
            }
            else{
                this.history.push(`There was not enough money to load ${quantity} ${name}`)
            }
        }
        return this.history.join('\n')
    }

    addToMenu(meal,neededProducts, price){
        price = Number(price);

        if (!this.menu.hasOwnProperty(meal)){
            this.menu[meal] = {};
            this.menu[meal].products = [];
            this.menu[meal].price = price;
            neededProducts.forEach(x => {
                let [product, quantity] = x.split(' ');
                quantity = Number(quantity)
                this.menu[meal].products.push({
                    name: product,
                    quantity: quantity
                })
            })
        }
        else{
            return `The ${meal} is already in the our menu, try something different.`
        }

        let menuLength = Object.keys(this.menu).length;

        if (menuLength === 1){
            return `Great idea! Now with the ${meal} we have 1 meal in the menu, other ideas?`
        }
        else{
            return `Great idea! Now with the ${meal} we have ${menuLength} meals in the menu, other ideas?`
        }
    }

    showTheMenu(){
        let menuLength = Object.keys(this.menu).length;
        let showMenuResult = [];

        if (menuLength === 0){
            return `Our menu is not ready yet, please come later...`
        }
        else{
            Object.entries(this.menu).forEach(x => {
                showMenuResult.push(`${x[0]} - $ ${x[1].price}`)
            })
        }

        return showMenuResult.join('\n');
    }

    makeTheOrder(meal){
        if (!this.menu.hasOwnProperty(meal)){
            return `There is not ${meal} yet in our menu, do you want to order something else?`
        }
        else{
            let neededProducts = this.menu[meal].products;
            let canBeCooked = true;
            for (let product of neededProducts) {
                if (this.stockProducts[product.name] === undefined){
                    return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                }
                else{
                    if (this.stockProducts[product.name] < product.quantity){
                        canBeCooked = false;
                        return `For the time being, we cannot complete your order (${meal}), we are very sorry...`
                    }
                    else{
                        this.stockProducts[product.name] -= product.quantity
                    }
                }
            }

            if (canBeCooked){
                this.budgetMoney += this.menu[meal].price
                return `Your order (${meal}) will be completed in the next 30 minutes and will cost you ${this.menu[meal].price}.`
            }
        }
    }
}