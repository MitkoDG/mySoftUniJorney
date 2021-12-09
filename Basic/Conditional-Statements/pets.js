function pets(input) {
    let numberofDays = Number(input[0]);
    let leftFood = Number(input[1]);
    let foodDogPerDay = Number(input[2]);
    let foodCatPerDay = Number(input[3]);
    let foodTurtPerDaygr = Number(input[4]);

    let dogNeeds = numberofDays * foodDogPerDay;
    let catNeeds = numberofDays * foodCatPerDay;
    let turtNeeds = numberofDays * foodTurtPerDaygr / 1000;

    let totalForThePets = dogNeeds+catNeeds+turtNeeds;

    if ( totalForThePets <= leftFood){
        let niceQTY = Math.floor(leftFood - totalForThePets);
        console.log(`${Math.abs(niceQTY)} kilos of food left.`);
    } else{
        let badQTY = Math.ceil(totalForThePets - leftFood );
        console.log(`${Math.abs(badQTY)} more kilos of food are needed.`);
    } 
}
    pets(['2',
        '10',
        '1',
        '1',
        '1200'
        ]);