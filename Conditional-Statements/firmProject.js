function firmProject(input) {
    let neededHours = Number(input[0]);
    let availableDays = Number(input[1]);
    let overWorkers = Number(input[2]);

    let minusTraining = availableDays * 0.90;
    let totalWorkingHours = minusTraining * 8;
    let overHours = overWorkers * 2 * availableDays;
    let totalOverall = Math.floor(totalWorkingHours + overHours);

    if (totalOverall >= neededHours) {
    console.log(`Yes!${Math.abs(totalOverall-neededHours)} hours left.`)
    } else
    console.log(`Not enough time!${(Math.abs(neededHours-totalOverall))} hours needed.`);
}
firmProject(['99',
    '3',
    '1'
]);