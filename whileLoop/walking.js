function walking(input) {
    let index = 0;

    let goal = 10000;
    let goalReached = false;
    let command = input[index];
    let sum = 0;

    while (command !== 'Going home') {
        let steps = Number(input[index]);
        sum += steps;

        if (sum >= goal) {
            console.log('Goal reached! Good job!');
            console.log(`${sum - goal} steps over the goal!`);
            goalReached = true;
            break;
        }
        index++;
        command = input[index];
    }
    index++;
    let afterGoingHome = Math.abs(goal - (sum + (Number(input[index]))));
    let afterGoingHomePlus = (sum + Number(input[index])) - goal;
    let afterGoingTotal = Math.abs(sum + (Number(input[index])));

    if (command === 'Going home') {
        if (afterGoingTotal > goal) {
            console.log('Goal reached! Good job!');
            console.log(`${afterGoingHomePlus} steps over the goal!`);
        } else if (!goalReached || goal < sum) {
            console.log(`${afterGoingHome} more steps to reach goal.`);
        }
    }
    if (!goalReached && goal < sum) {
        console.log(`${afterGoingHome} more steps to reach goal.`);
    }
}
walking(["1500","300","2500","3000","Going home","200"]);