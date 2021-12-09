function piratesTask(input) {
  input.pop();
  let sailIndex = input.indexOf("Sail");

  let townsInput = input.slice(0, sailIndex);
  let actionInput = input.slice(sailIndex + 1);

  // let town = {
  //     "Tortuga": {
  //         population: 345000,
  //         gold: 1250
  //     },
  //     "Santo Domingo":{
  //         population: 240000,
  //         gold: 630
  //     }
  // }

  let towns = {};
  for (let townLine of townsInput) {
    townLine = townLine.split("||");
    let townName = townLine[0];
    let townPopulation = Number(townLine[1]);
    let townGold = Number(townLine[2]);

    if (!towns[townName]) {
      // ако несъществува такъв град
      towns[townName] = {
        population: 0,
        gold: 0,
      }
    }
    towns[townName].population += townPopulation;
    towns[townName].gold += townGold;
  }

  for (let actionLine of actionInput) {
    actionLine = actionLine.split("=>");
    let currentAction = actionLine[0];
    let currentTown = actionLine[1];

    if (currentAction === "Plunder") {
      let people = Number(actionLine[2]);
      let money = Number(actionLine[3]);
      towns[currentTown].population -= people;
      towns[currentTown].gold -= money;

      console.log(
        `${currentTown} plundered! ${money} gold stolen, ${people} citizens killed.`
      );

      if (towns[currentTown].population <= 0 || towns[currentTown].gold <= 0) {
        delete towns[currentTown];
        console.log(`${currentTown} has been wiped off the map!`);
      }
    } else if (currentAction === "Prosper") {
      let money = Number(actionLine[2]);
      if (money < 0) {
        console.log("Gold added cannot be a negative number!");
      } else {
        towns[currentTown].gold += money;
        console.log(
          `${money} gold added to the city treasury. ${currentTown} now has ${towns[currentTown]} gold.`
        )
      }
    }
  }
  towns = Object.entries(towns);
  if (towns.length == 0) {
    console.log(
      "Ahoy, Captain! All targets have been plundered and destroyed!"
    );
  } else {
      console.log(`Ahoy, Captain! There are ${towns.length} wealthy settlements to go to:`);
    towns.sort((townA, townB) => {
      let townAName = townA[0];
      let townBName = townB[0];
      let townAProperties = townA[1];
      let townBProperties = townB[1];

      if (townAProperties.gold !== townBProperties.gold) {
        return townBProperties.gold - townAProperties.gold;
      } else {
        return townAName.localeCompare(townBName);
      }
    });

    for (let currentTown of towns) {
      let currentTownName = currentTown[0];
      let currentTownProperties = currentTown[1];

      console.log(
        `${currentTownName} -> Population: ${currentTownProperties.population} citizens, Gold: ${currentTownProperties.gold} kg`
      );
    }
  }
}
piratesTask([
  "Tortuga||345000||1250",
  "Santo Domingo||240000||630",
  "Havana||410000||1100",
  "Sail",
  "Plunder=>Tortuga=>75000=>380",
  "Prosper=>Santo Domingo=>180",
  "End",
]);
