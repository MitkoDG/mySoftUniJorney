function counterStrike(arr) {
    let energy = Number(arr.shift());
    let wonBattels = 0;
    while (true) {
      let curentEnemy = arr.shift();
      if (true) {
        if (curentEnemy === "End of battle") {
          console.log(`Won battles: ${wonBattels}. Energy left: ${energy}`);
          break;
        } else if (energy < curentEnemy) {
          console.log(
            `Not enough energy! Game ends with ${wonBattels} won battles and ${energy} energy`
          );
          break;
        }
        if (energy >= curentEnemy) {
          energy -= Number(curentEnemy);
          wonBattels++;
        }
        if (wonBattels % 3 === 0) {
          energy += wonBattels;
        }
      }
    }
  }

  // ---------------------------- second 

  function counterStrike(input) {
    let initialEnergy = Number(input.shift());
    let enemyDistance = input;
    let wonBattles = 0;
    let distanceL = input.length;
    let currentEnergy = initialEnergy;
  
    for (let i = 0; i < distanceL; i++) {
      if (enemyDistance[i] === "End of battle") {
        console.log(`Won battles: ${wonBattles}. Energy left: ${currentEnergy}`);
        break;
      }
  
      if (currentEnergy < enemyDistance[i]) {
        console.log(
          `Not enough energy! Game ends with ${wonBattles} won battles and ${currentEnergy} energy`
        );
        break;
      } else if (currentEnergy >= enemyDistance[i]) {
        currentEnergy = initialEnergy -= enemyDistance[i];
        wonBattles++;
  
        if (wonBattles % 3 === 0) {
          currentEnergy += wonBattles;
          initialEnergy = currentEnergy;
        }
      }
    }
  }