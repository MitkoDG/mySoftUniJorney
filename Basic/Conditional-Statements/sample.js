function solve(input) {
    let price = 0;
    let productName = input[0];
    let town = input[1];
    let quantity = Number(input[2]);
    if (town == "Sofia") {
        if (productName == "coffee") {
            price = quantity * 0.50;
        } // TODO: finish the checks for all the products…
    }
    //else if (town == "Plovdiv")
    //else if (town == "Varna")
    // TODO: check other two towns…
}
solve(['coffee', 'Sofia', '3']);