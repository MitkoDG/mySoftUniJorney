function computer(arr) {
    let customerType = arr.pop()
    let partsPrice = arr.map(x=>Number(x))
    let sum = 0

    for (let num of partsPrice) {
        if (num < 0) {
            console.log("Invalid price!");
        } else {
            sum += num
        }
    }
    let sumWithoutTaxes = Number(sum)
    let taxes = Number(sum * 0.20)
    sum = Number(sum * 1.20)

    if (customerType === 'special') {
        sum = Number(sum * 0.90)
    }

    if (sum === 0) {
        console.log("Invalid order!");
    } else {

        console.log(`Congratulations you've just bought a new computer!`)
        console.log(`Price without taxes: ${sumWithoutTaxes.toFixed(2)}$`)
        console.log(`Taxes: ${taxes.toFixed(2)}$`)
        console.log('-----------');
        console.log(`Total price: ${sum.toFixed(2)}$`);
    }
}
// computer(['regular'])
// computer(['1023',
//     '15',
//     '-20',
//     '-5.50',
//     '450',
//     '20',
//     '17.66',
//     '19.30',
//     'regular'])
    computer([
        '1050',
        '200',
        '450',
        '2',
        '18.50',
        '16.86',
        'special'
        ])
        
// Write a program that prints you a receipt for your new computer. You will receive the parts' prices (without tax) until you receive what type of customer this is - special or regular. Once you receive the type of customer you should print the receipt.
// The taxes are 20% of each part's price you receive. 
// If the customer is special, he has a 10% discount on the total price with taxes.
// If a given price is not a positive number, you should print "Invalid price!" on the console and continue with the next price.
// If the total price is equal to zero, you should print "Invalid order!" on the console.
// Input
// •	You will receive numbers representing prices (without tax) until command "special" or "regular":
// Output
// •	The receipt should be in the following format: 
// "Congratulations you've just bought a new computer!
// Price without taxes: {total price without taxes}$
// Taxes: {total amount of taxes}$
// -----------
// Total price: {total price with taxes}$"
// Note: All prices should be displayed to the second digit after the decimal point! The discount is applied only on the total price. Discount is only applicable to the final price!

function solve(input) {
    let totalPrice = 0;
    let customer = input.pop();

    for (let price of input) {
        if (price >= 0) {
            let currentPrice = Number(price);
            totalPrice += currentPrice;

        } else if (price < 0) {
            console.log(`Invalid price!`);
        }
    }
    
    let finalPrice = 0;

    if (customer === 'special') {
        finalPrice = totalPrice + (totalPrice * 0.20);
        finalPrice -= finalPrice * 0.10;
    } else {
        finalPrice = totalPrice + (totalPrice * 0.20);
    }

    if (totalPrice > 0) {
        console.log(`Congratulations you've just bought a new computer!`);
        console.log(`Price without taxes: ${totalPrice.toFixed(2)}$`);
        console.log(`Taxes: ${(totalPrice * 0.20).toFixed(2)}$`);
        console.log(`-----------`);
        console.log(`Total price: ${finalPrice.toFixed(2)}$`);

    } else {
        console.log('Invalid order!');
    }

}
solve([
    '1050',
    '200',
    '450',
    '2',
    '18.50',
    '16.86',
    'special'
    ])