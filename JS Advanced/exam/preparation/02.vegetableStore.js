class VegetableStore {

    constructor(owner, location) {
        this.owner = owner;
        this.location = location;
        this.availableProducts = [];
    }

    loadingVegetables(vegetables) {
        let vegyType = [];
        for (const prod of vegetables) {
            let [type, quantity, price] = prod.split(" ");
            quantity = Number(quantity);
            price = Number(price);
            let typeProd = this.availableProducts.find(x => x.type === type);

            if (!typeProd) {
                this.availableProducts.push({ type, quantity, price });
                vegyType.push(type)
            } else {
                typeProd.quantity += quantity;
                if (typeProd.price < price) {
                    typeProd.price = price;
                }
            }
        }
        return `Successfully added ${vegyType.join(', ')}`
    }

    buyingVegetables(selectedProducts) {
        let totalPrice = 0;
        selectedProducts.forEach((p) => {
            let [type, quantity] = p.split(' ');
            let typeProd = this.availableProducts.find(x => x.type === type);
            if (!typeProd) {
                throw new Error(`${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            if (quantity > typeProd.quantity) {
                throw new Error(`The quantity ${quantity} for the vegetable ${type} is not available in the store, your current bill is $${totalPrice.toFixed(2)}.`)
            }
            totalPrice += typeProd.price * quantity;
            typeProd.quantity -= quantity;
        })
        return `Great choice! You must pay the following amount $${totalPrice.toFixed(2)}.`
    }

    rottingVegetable(type, quantity) {
        let typeProd = this.availableProducts.find(x => x.type === type);
        if (!typeProd) {
            throw new Error(`${type} is not available in the store.`);
        }
        if (quantity > typeProd.quantity) {
            typeProd.quantity = 0;
            return `The entire quantity of the ${type} has been removed.`;
        };
        typeProd.quantity -= quantity;

        return `Some quantity of the ${type} has been removed.`
    }

    revision (){
        let result = this.availableProducts.sort((a, b)=> a.price - b.price)
        .reduce((acc, element)=>{
            acc.push(`${element.type}-${element.quantity}-$${element.price}`);
            return acc;
        },[]);
        return `Available vegetables:\n${result.join('\n')}\nThe owner of the store is ${this.owner}, and the location is ${this.location}.`
    }
}

// console.log('----input 1 ----');
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));

//  Successfully added Okra, Beans, Celery

// console.log('----input 2 ----');
// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.buyingVegetables(["Okra 1"]));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));
// console.log(vegStore.buyingVegetables(["Banana 1", "Beans 2"]));

// Successfully added Okra, Beans, Celery
// Great choice! You must pay the following amount $3.50.
// Great choice! You must pay the following amount $27.65.
// Uncaught Error: Banana is not available in the store, your current bill is $0.00.

// console.log('----input 3 ----');

// let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
// console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
// console.log(vegStore.rottingVegetable("Okra", 1));
// console.log(vegStore.rottingVegetable("Okra", 2.5));
// console.log(vegStore.buyingVegetables(["Beans 8", "Okra 1.5"]));

// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Uncaught Error: The quantity 1.5 for the vegetable Okra is not available in the store, your current bill is $22.40.

// console.log('----input 4 ----');

let vegStore = new VegetableStore("Jerrie Munro", "1463 Pette Kyosheta, Sofia");
console.log(vegStore.loadingVegetables(["Okra 2.5 3.5", "Beans 10 2.8", "Celery 5.5 2.2", "Celery 0.5 2.5"]));
console.log(vegStore.rottingVegetable("Okra", 1));
console.log(vegStore.rottingVegetable("Okra", 2.5));
console.log(vegStore.buyingVegetables(["Beans 8", "Celery 1.5"]));
console.log(vegStore.revision());

// Successfully added Okra, Beans, Celery
// Some quantity of the Okra has been removed.
// The entire quantity of the Okra has been removed.
// Great choice! You must pay the following amount $26.15.
// Available vegetables:
// Celery-4.5-$2.5
// Beans-2-$2.8
// Okra-0-$3.5
// The owner of the store is Jerrie Munro, and the location is 1463 Pette Kyosheta, Sofia.
