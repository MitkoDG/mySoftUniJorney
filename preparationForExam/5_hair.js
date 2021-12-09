function solve(input) {
    let dayTarget = Number(input[0]);   // 300
    index = 1;
    let command = input[index];         // до получаване на команда "closed"
    let profit = 0;
    let isOK = false;

    while (command !== "closed") {
        command = input[index];
        index++;

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
            command = input[index];
            index++;
            if (command === "touch up") {
                profit += 20;
            } else if (command === "full color") {
                profit += 30;
            }
        }

        if (profit >= dayTarget) {
            isOK = true;
            break;
        }

    }

    if (isOK) {
        console.log(`You have reached your target for the day!`);
        console.log(`Earned money: ${profit}lv.`);
    } else {
        console.log(`Target not reached! You need ${dayTarget-profit}lv. more.`);
        console.log(`Earned money: ${profit}lv.`)
    }

}

solve(["50",
"color",
"full color",
"haircut",
"ladies"]);