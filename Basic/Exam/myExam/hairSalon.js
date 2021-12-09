function hairSalon(input) {
    let index = 0;
    let targetForTheDay = Number(input[index++]);
    
    let command = input[index];
    let profit = 0;
    let isReached = false;

    while (command !== "closed") {
        command = input[index++];

        if (command === "haircut") {
            command = input[index];
            index++;
            if (command === "mens") {
                profit += 15;
            } else if (command === "ladies") {
                profit += 20;
            } else if (command === "kids") {
                profit += 10;
            }
        }

        if (command === "color") {
            command = input[index++];
            if (command === "touch up") {
                profit += 20;
            } else if (command === "full color") {
                profit += 30;
            }
        }

        if (profit >= targetForTheDay) {
            isReached = true;
            break;
        }

    }

    if (isReached) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${profit}lv.`);
    } else {
        console.log(`Target not reached! You need ${targetForTheDay-profit}lv. more.`);
        console.log(`Earned money: ${profit}lv.`)
    }

}
hairSalon(["50",
"color",
"full color",
"haircut",
"ladies"]);