function storeTask(currentStocks, forDelivery) {

    let storeProducts = {}
    let currentL = currentStocks.length
    let forDeliveryL = forDelivery.length
    for (let i = 0; i < currentL; i+=2) {
        let product = currentStocks[i];
        storeProducts[product] = Number(currentStocks[i+1])
    }

    for(let i = 0; i < forDeliveryL; i+=2){
        let product = forDelivery[i];
        if(!storeProducts.hasOwnProperty(product)) {
            storeProducts[product] = 0;

        }
        storeProducts[product]+= Number(forDelivery[i+1])
    }
    for( let product in storeProducts) {
        console.log(`${product} -> ${storeProducts[product]}`);
    }

    // alternative
    // let entries = Object.entries(storeProducts).sort((a,b)=>{
    //     return a[1] - b[1]
    // });
    
}
storeTask(
  ["Chips", "5", "CocaCola", "9", "Bananas", "14", "Pasta", "4", "Beer", "2"],
  ["Flour", "44", "Oil", "12", "Pasta", "7", "Tomatoes", "70", "Bananas", "30"]
);
