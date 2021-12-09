function workOut(input) {
    let runKmPerDay = Number(input[1]);
    let totalRunDistance = runKmPerDay;
    let inputL = input.length;
    let target = 1000;

    for (i = 2; i < inputL; i++) {
        runKmPerDay = runKmPerDay + (runKmPerDay * input[i]/100);
        totalRunDistance += runKmPerDay;
    }

    if (totalRunDistance > target) {
        kmOnTopOfTarget = totalRunDistance - target;
        console.log(`You've done a great job running ${Math.ceil(kmOnTopOfTarget)} more kilometers!`);
    } else {
        kmToTarget = target - totalRunDistance;
        console.log(`Sorry Mrs. Ivanova, you need to run ${Math.ceil(kmToTarget)} more kilometers`);
    }
}
workOut(["5",
"30",
"10",
"15",
"20",
"5",
"12"]);
