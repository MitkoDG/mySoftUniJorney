function fruitShop(input) {

    let fruit = input[0];
    let day = input[1];
    let pcs = Number(input[2]);
    if (day === 'Monday' || day === 'Tuesday' || day === 'Wednesday' || day === 'Thursday' || day === 'Friday') {
        switch (fruit) {
            case 'banana': console.log((pcs * 2.50).toFixed(2)); break;
            case 'apple': console.log((pcs * 1.20).toFixed(2)); break;
            case 'orange': console.log((pcs * 0.85).toFixed(2)); break;
            case 'grapefruit': console.log((pcs * 1.45).toFixed(2)); break;
            case 'kiwi': console.log((pcs * 2.70).toFixed(2)); break;
            case 'pineapple': console.log((pcs * 5.50).toFixed(2)); break;
            case 'grapes': console.log((pcs * 3.85).toFixed(2)); break;
            default: console.log('error'); break;
        }

    } else if (day === 'Saturday' || day === 'Sunday') {
        switch (fruit) {
            case 'banana': console.log((pcs * 2.70).toFixed(2)); break;
            case 'apple': console.log((pcs * 1.25).toFixed(2)); break;
            case 'orange': console.log((pcs * 0.90).toFixed(2)); break;
            case 'grapefruit': console.log((pcs * 1.60).toFixed(2)); break;
            case 'kiwi': console.log((pcs * 3.00).toFixed(2)); break;
            case 'pineapple': console.log((pcs * 5.60).toFixed(2)); break;
            case 'grapes': console.log((pcs * 4.20).toFixed(2)); break;
            default: console.log('error'); break;
        }
    } else {
        console.log('error');
    }
}
fruitShop(["banana",
    "Monday",
    "0.5"])
    ;
