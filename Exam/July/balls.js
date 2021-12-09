function balls(input) {
    let index = 0;
    let pcsBalls = Number(input[index]);
    index++;
    // let ballType = input[index];
    // index++;

    let ballsL = input.length;
    let sum = 0;

    let counterRed = 0;
    let counterOrange = 0;
    let counterYellow = 0;
    let counterWhite = 0;
    let counterBlack = 0;
    let counterSkip = 0;

    for (let i = 1; i < ballsL; i++) {
        let ballType = input[index];

        switch (ballType) {
            case 'red':
                counterRed++;
                sum += 5;
                break;
            case 'orange':
                counterOrange++;
                sum += 10;
                break;
            case 'yellow':
                counterYellow++;
                sum += 15;
                break;
            case 'white':
                counterWhite++;
                sum += 20;
                break;
            case 'black':
                counterBlack++;
                sum = Math.floor(sum / 2);
                break;
            default:
                counterSkip++;
                break;
        }
        index++;
    }
    

    console.log(`Total points: ${sum}`);
    console.log(`Points from red balls: ${counterRed}`);
    console.log(`Points from orange balls: ${counterOrange}`);
    console.log(`Points from yellow balls: ${counterYellow}`);
    console.log(`Points from white balls: ${counterWhite}`);
    console.log(`Other colors picked: ${counterSkip}`);
    console.log(`Divides from black balls: ${counterBlack}`);

}
balls(['10','white','white','ee','red','orange','red']);