function foodForPets(input){
    let index = 0;
    let days = Number(input[index++]);
    let totalFood = Number(input[index++]);

    let foodL = input.length;
    let daysCounter = 0;
    let dogsFood = 0;
    let catFood = 0;
    let tempDogFood = 0;
    let tempCatFood = 0;
    let catB = 0;
    let dogB = 0;
    let totalBDog = 0;
    let totalBCat = 0;

    for (let i = 2; i < foodL; i++) {

        if (i % 2 ==0) {
            daysCounter++;
            dogsFood += Number(input[i]);
            tempDogFood = Number(input[i]);
            if (daysCounter % 3 === 0) {
                dogB = tempDogFood * 0.10;
                totalBDog+= dogB;
            }
        } else {
            catFood += Number(input[i]);
            tempCatFood = Number(input[i]);
            if (daysCounter % 3 === 0) {
                catB = tempCatFood * 0.10;
                totalBCat+= catB;
            }
        }
        
    }
    let totalEaten = dogsFood + catFood;
    let totalPercentage = totalEaten / totalFood * 100;
    let totalDogEaten = dogsFood / totalEaten * 100;
    let totalCatEaten = catFood / totalEaten * 100;
    let totalEatenB = totalBDog + totalBCat;

    console.log(`Total eaten biscuits: ${totalEatenB.toFixed(0)}gr.`);
    console.log(`${totalPercentage.toFixed(2)}% of the food has been eaten.`);
    console.log(`${totalDogEaten.toFixed(2)}% eaten from the dog.`);
    console.log(`${totalCatEaten.toFixed(2)}% eaten from the cat.`);
}
foodForPets(['3',
    '1000',
    '300',
    '20',
    '100',
    '30',
    '110',
    '40'
    ])