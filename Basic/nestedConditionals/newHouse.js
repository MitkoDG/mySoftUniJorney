function newHouse(input) {

    let type = input[0];
    let numFlowers = input[1];
    let budget = Number(input[2]);

    let price = 0;

    if (type === 'Roses') {
        price = numFlowers * 5;
        if (numFlowers > '80') {
            price = price * 0.90;
        }
    } else if (type === 'Dahlias') {
        price = numFlowers * 3.80;
        if (numFlowers > '90') {
            price = price * 0.85;

        }
    } else if (type === 'Tulips') {
        price = numFlowers * 2.80;
        if (numFlowers > '80') {
            price = price * 0.85;
        }

    } else if (type === 'Narcissus') {
        price = numFlowers * 3;
        if (numFlowers < '120') {
            price = price * 1.15;
        }
    } else if (type === 'Gladiolus') {
        price = numFlowers * 2.50;
        if (numFlowers < '80') {
            price = price * 1.20;
        }
    }
    let diff = Math.abs(budget - price);
    if (budget >= price) {
        console.log(`Hey, you have a great garden with ${numFlowers} ${type} and ${diff.toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${diff.toFixed(2)} leva more.`);
    }
}

newHouse(["Roses",
"55",
"250"]);
