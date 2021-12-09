function fishtank(input){
    let lenght = Number(input[0]);
    let width = Number(input[1]);
    let height = Number(input[2]);
    let percentage = Number(input[3]);

    let volumeForTank = lenght * width * height;
    let totalInLiters = volumeForTank * 0.001;
    let minusPercentage = percentage * 0.01;
    let tankCanFit = totalInLiters * (1-minusPercentage);


    console.log(tankCanFit);
}
fishtank(["85","75","47","17"]);
