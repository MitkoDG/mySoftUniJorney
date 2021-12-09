function fuelTank(input) {
let typeOfFuel = input[0];
let qtyLiters = Number(input[1]);

    if ( typeOfFuel === 'Diesel' ) {
        if( qtyLiters >= 25 ) {
            console.log(`You have enough diesel.`);
        } else {
            console.log(`Fill your tank with diesel!`);
        }
    } else if (typeOfFuel === 'Gasoline') {
        if( qtyLiters >= 25 ) {
            console.log(`You have enough gasoline.`);
        } else {
            console.log(`Fill your tank with gasoline!`);
        }
    } else if( typeOfFuel === 'Gas') {
        if( qtyLiters >= 25 ) {
            console.log(`You have enough gas.`);
        } else {
            console.log(`Fill your tank with gas!`);
        }
    } else {
        console.log('Invalid fuel!');
    }
}
fuelTank(['Diesel',
    '10']);