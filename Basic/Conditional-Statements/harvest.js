function harvest(input) {
    let areaOfArea = Number(input[0]);
    let areaYPerSM = Number(input[1]);
    let neededLWine = Number(input[2]);
    let numberOfEmployees = Number(input[3]);

    let totalGrapes = areaOfArea * areaYPerSM;
    let wineOverall = (totalGrapes * 0.40) / 2.5;
    let leftWine = Math.abs(wineOverall - neededLWine);
    let perPersonWine = leftWine / numberOfEmployees;

    if ( wineOverall >= neededLWine ) {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wineOverall)} liters.`);

        console.log(`${Math.ceil(leftWine)} liters left -> ${Math.ceil(perPersonWine)} liters per person.`);
    } else {
        console.log(`It will be a tough winter! More ${Math.floor(leftWine)} liters wine needed.`);
    }


}
harvest(['1020',
'1.5',
'425',
'4'
]);