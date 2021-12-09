function catFood(input) {
 
    let catsCount = Number(input[0]);
 
    let smallCatsCounter = 0;
    let bigCatsCounter = 0;
    let hugeCatsCounter = 0;
    let foodEaten = 0;
 
    for (let i = 1; i <= catsCount; i++) {
        let currentQuantityFood = Number(input[i]);
 
        if (currentQuantityFood >= 100 && currentQuantityFood < 200) {
            smallCatsCounter++;
            foodEaten += currentQuantityFood;
        } else if (currentQuantityFood >= 200 && currentQuantityFood < 300) {
            bigCatsCounter++;
            foodEaten += currentQuantityFood;
        } else if (currentQuantityFood >= 300 && currentQuantityFood < 400) {
            hugeCatsCounter++;
            foodEaten += currentQuantityFood;
        }
    }
 
    let foodEatenInKG = foodEaten / 1000;
 
    console.log (`Group 1: ${smallCatsCounter} cats.`);
    console.log (`Group 2: ${bigCatsCounter} cats.`);
    console.log (`Group 3: ${hugeCatsCounter} cats.`);
    console.log (`Price for food per day: ${(foodEatenInKG * 12.45).toFixed(2)} lv.`);
}