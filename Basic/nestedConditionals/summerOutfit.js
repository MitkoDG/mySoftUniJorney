function summerOutfit(input) {
    let degrees = Number(input[0]);
    let timeOfDay = input[1];

    let outFit = 0;
    let shoes = 0;

    if (degrees >= '10' && degrees <= '18') {
        outFit = 'Sweatshirt';
        shoes = 'Sneakers';
    } else if (timeOfDay === 'Afternoon' || timeOfDay === 'Evening') {
        outFit = 'Shirt';
        shoes = 'Moccasins'
    }
    if (degrees > '18' && degrees <= '24') {
        outFit = 'Shirt';
        shoes = 'Moccasins';
    } else if (timeOfDay === 'Afternoon') {
        outFit = 'T-Shirt';
        shoes = 'Sandals';
    } else if ( timeOfDay === 'Evening'){
        outFit = 'Shirt';
        shoes = 'Moccasins'
    }
    if ( degrees >= '25') {
        outFit = 'T-Shirt';
        shoes = 'Sandals';
    } else if (timeOfDay === 'Afternoon') {
        outFit = 'Swim Suit';
        shoes = 'Barefoot';
    } else if ( timeOfDay === 'Evening'){
        outFit = 'Shirt';
        shoes = 'Moccasins'
    }

    console.log(`It's ${degrees} degrees, get your ${outFit} and ${shoes}.`);
}
summerOutfit(["22",
"Afternoon"])
;
