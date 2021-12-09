function jorney(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let spent = 0;
    let destination = 0;
    let typeOfVacation = 0;

    if (budget <= 100) {
        destination = 'Bulgaria';
        if (season === 'summer') {
            spent = budget * 0.30;
            typeOfVacation = 'Camp';
        } else if (season === 'winter') {
            spent = budget * 0.70;
            typeOfVacation = 'Hotel';
        }
    } else if (budget <= 1000) {
        destination = 'Balkans';
        if (season === 'summer') {
            spent = budget * 0.40;
            typeOfVacation = 'Camp';
        } else if (season === 'winter') {
            spent = budget * 0.80;
            typeOfVacation = 'Hotel';
        }
    } else if (budget > 1000) {
        destination = 'Europe';
        spent = budget * 0.90;
        typeOfVacation = 'Hotel';
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${typeOfVacation} - ${spent.toFixed(2)}`);
}
jorney(["1500", "summer"]);