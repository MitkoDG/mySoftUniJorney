function dungeonestDark(arr) {
    let health = 100;
    let coins = 0;
    let newArr = arr[0].split("|");
    for (let i = 0; i < newArr.length; i++) {
        let [item, points] = newArr[i].split(" ");
        if (item === "potion") {
            health += Number(points);
            if (health > 100) {
                points = points - (health - 100);
                health = 100;
            }
            console.log(`You healed for ${points} hp.`);
            console.log(`Current health: ${health} hp.`)
        } else if (item === "chest") {
            coins += Number(points);
            console.log(`You found ${points} coins.`)
        } else {
            health -= Number(points);
            if (health > 0) {
                console.log(`You slayed ${item}.`);
            }
            if (health <= 0) {
                console.log(`You died! Killed by ${item}.`);
                console.log(`Best room: ${i + 1}`);
                break;
            }
        }
    }
    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }
}
dungeonestDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"]);
dungeonestDark(["cat 10|potion 30|orc 10|chest 10|snake 25|chest 110"]);