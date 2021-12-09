function hairSalon(input) {
    let index = 0;
    let target = Number(input[index++]);
    let command = input[index++];
    let totalEarned = 0;
    let isReached = false;

    while (command !== 'closed') {
        let currentNeed = command;
        let typeOfNeed = input[index++];

        if (currentNeed === 'haircut') {
            switch (typeOfNeed) {
                case 'mens':
                    totalEarned += 15;
                    break;
                case 'ladies':
                    totalEarned += 20;
                    break;
                case 'kids':
                    totalEarned += 10;
                    break;
            }
        } else if (currentNeed === 'color') {
            switch (typeOfNeed) {
                case 'touch up':
                    totalEarned += 20;
                    break;
                case 'full color':
                    totalEarned += 30;
                    break;
            }

        }
        if (totalEarned >= target) {
            console.log("You have reached your target for the day!");
            console.log(`Earned money: ${totalEarned}lv.`);
            isReached = true;
            break;
        }
        command = input[index++];
    }
    if (!isReached) {
        console.log(`Target not reached! You need ${target - totalEarned}lv. more.`);
        console.log(`Earned money: ${totalEarned}lv.`);
    }
}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);