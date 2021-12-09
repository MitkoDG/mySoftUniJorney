function smallShop(input) {

    let product = input[0];
    let city = input[1];
    let pcs = Number(input[2]);

    if (city === "Sofia") {
        switch (product) {
            case 'coffee': console.log(pcs * 0.50); break;
            case 'water': console.log(pcs * 0.80); break;
            case 'beer': console.log(pcs * 1.20); break;
            case 'sweets': console.log(pcs * 1.45); break;
            case 'peanuts': console.log(pcs * 1.60); break;
        }
    } else if (city === "Plovdiv") {
        switch (product) {
            case 'coffee': console.log(pcs * 0.40); break;
            case 'water': console.log(pcs * 0.70); break;
            case 'beer': console.log(pcs * 1.15); break;
            case 'sweets': console.log(pcs * 1.30); break;
            case 'peanuts': console.log(pcs * 1.50); break;
        }
    } else if (city === "Varna") {
        switch (product) {
            case 'coffee': console.log(pcs * 0.45); break;
            case 'water': console.log(pcs * 0.70); break;
            case 'beer': console.log(pcs * 1.10); break;
            case 'sweets': console.log(pcs * 1.35); break;
            case 'peanuts': console.log(pcs * 1.55); break;
        }
    }
}
smallShop(["coffee","Sofia","2"]);