function vacation(input) {
    let index = 0;
    let needMoney = Number(input[index]);
    index++;
    let money = Number(input[index]);
    index++;

    let counter = 0;
    let dayCounter = 0;
    // let isCantSaveMoney = false;

    while (money < needMoney) {
        dayCounter++;
        let action = input[index];
        index++;
        let currentMoney = Number(input[index]);
        index++;

        if (action === 'spend') {
            money -= currentMoney;
            if( money < 0) {
                money = 0;
            }
            counter++;
        } else {
            money += currentMoney;
            counter = 0;
        }

        if (counter === 5) {
            //isCantSaveMoney = true
            console.log("You can't save the money.");
            console.log(`${ dayCounter }`);
            break;
        }
        // if (isCantSaveMoney = true)

    }

    if (money >= needMoney) {
        console.log(`You saved the money for ${dayCounter} days.`);
    }
}
vacation(["2000",
    "1000",
    "spend",
    "1200",
    "save",
    "2000"]);