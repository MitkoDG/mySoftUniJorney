function solve(lostFight, helmetPrice, swordPrice, ShieldPrice, armorPrice) {
  let price = 0;
  for (let currentFight = 1; currentFight <= lostFight; currentFight++) {

    if (currentFight % 2 === 0) {
      price += helmetPrice;
    }
    if (currentFight % 3 === 0) {
      price += swordPrice;
    }
    if (currentFight % 6 === 0) {
      price += ShieldPrice;
    }
    if (currentFight % 12 === 0) {
      price += armorPrice;
    }

    
  }
  console.log(`Gladiator expenses: ${price.toFixed(2)} aureus`);
}
solve(7, 2, 3, 4, 5);
