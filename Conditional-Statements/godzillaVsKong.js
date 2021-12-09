function godzillaVsKong(input) {
    let budget = Number(input[0]);
    let peopleS = Number(input[1]);
    let clothes = Number(input[2]);

    let decoder = budget * 0.10;
    let sumClothes = peopleS * clothes;

    if ( peopleS > 150 ) {
        sumClothes = sumClothes * 0.90;
    }
    if ( ( decoder + sumClothes) > budget) {
        console.log(`Not enough money!`);
        let totalForTheProject = ( decoder + sumClothes) - budget;
        console.log(`Wingard needs ${totalForTheProject.toFixed(2)} leva more.`)
    } else {
        console.log(`Action!`);
        let totalForTheProject = Math.abs(( decoder + sumClothes) - budget);
        console.log(`Wingard starts filming with ${totalForTheProject.toFixed(2)} leva left.`)
    }


}
godzillaVsKong(["15437.62",
"186",
"57.99"])




