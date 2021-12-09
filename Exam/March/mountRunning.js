function mountRunning(input) {
    let recordInSec = Number(input[0]);
    let distanceM = Number(input[1]);
    let distancePerM = Number(input[2]);

    let neededSec = distanceM * distancePerM;
    let slowingSec = Math.floor(distanceM / 50) * 30;
    let afterslowing = neededSec + slowingSec;
    

    if (afterslowing < recordInSec) {
        console.log(`Yes! The new record is ${afterslowing.toFixed(2)} seconds.`);
    } else {
        console.log(`No! He was ${(afterslowing - recordInSec).toFixed(2)} seconds slower.`);
    }
}
mountRunning(['5554.36',
    '1340',
    '3.23'
]);