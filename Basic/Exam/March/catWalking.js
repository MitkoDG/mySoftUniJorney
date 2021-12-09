function catWalking(input){
    let walkingMin = Number(input[0]);
    let numWalking = Number(input[1]);
    let calory = Number(input[2]);

    let walking = walkingMin * numWalking;
    let burnedCal = walking * 5;

    let target = calory / 2;

    if (burnedCal >= target) {
        console.log(`Yes, the walk for your cat is enough. Burned calories per day: ${burnedCal}.`);
    } else {
        console.log(`No, the walk for your cat is not enough. Burned calories per day: ${burnedCal}.`);
    }
}
catWalking(['15',
    '2',
    '500'
    ]);