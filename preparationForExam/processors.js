function processors(input) {
    let goal = Number(input[0]);
    let employees = Number(input[1]);
    let workingDays = Number(input[2]);

    let productionHours = employees * workingDays * 8;
    let producedP = Math.floor(productionHours / 3);

    let diff = Math.abs( goal - producedP);
    let money = diff * 110.10;


    if (goal > producedP) {
        console.log(`Losses: -> ${money.toFixed(2)} BGN`);
    } else {
        console.log(`Profit: -> ${money.toFixed(2)} BGN`);
    }

}
processors(["150",
"7",
"18"])
;