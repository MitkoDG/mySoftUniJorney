function muOnline(input) {
  let isAlive = false;
  let dungeons = input.split("|");

  let health = 100;
  let coins = 0;
  let currentDungeon = 0;

  for (const dungeon of dungeons) {
    let dungeonSplit = dungeon.split(" ");
    let command = dungeonSplit[0];
    let value = Number(dungeonSplit[1]);
    currentDungeon++;

    if (command == "potion") {
      let healedWith = value;
      // health = Math.min(100, health + value);
      if (health + value > 100) {
        health = 100;
        healedWith = 100 - health;
      } else {
        health += value;
      }
      console.log(`You healed for ${healedWith} hp.`);
      console.log(`Current health: ${health} hp.`); 
    } else if (command == "chest") {
      coins += value;
      console.log(`You found ${value} bitcoins.`);
    } else {
      health -= value;

      if (health <= 0) {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${currentDungeon}`);
        isAlive = false;
        break;
      } else {
        console.log(`You slayed ${command}.`);
      }
    }
    if (isAlive) {
      console.log("You've made it!");
      console.log(`Bitcoins: ${coins}`);
      console.log(`Health: ${health}`);
    }
  }
}
muOnline("rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000");
