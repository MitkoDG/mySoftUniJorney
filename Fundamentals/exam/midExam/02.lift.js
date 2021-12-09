function thelift(arr) {
  let people = Number(arr.shift()); // 15
  let availableWagons = arr[0].split(" ").map((x) => Number(x)); // [0, 0, 0, 0, 0]

  let waitingPeople = availableWagons.reduce((a, b) => a + b);
  let wagonL = availableWagons.length;
  let max = wagonL * 4;
  let currentWagon = 0;
  let isTrue = true;
  while (currentWagon < wagonL) {
    if (people > max - waitingPeople && isTrue) {
      console.log(
        `There isn't enough space! ${
          people - (max - waitingPeople)
        } people in a queue!`
      );
      isTrue = false;
    }
    let sum = 0;
    if (people >= 4 - availableWagons[currentWagon]) {
      sum = 4 - availableWagons[currentWagon];
      availableWagons[currentWagon] += sum;
      people -= sum;
    } else if (people !== 0) {
      availableWagons[currentWagon] = people;
      people = 0;
      console.log("The lift has empty spots!");
      break;
    } else {
      console.log("The lift has empty spots!");
      break;
    }

    currentWagon++;
  }

  console.log(availableWagons.join(" "));
}
thelift(["15", "0 0 0 0 0"]);
thelift(["20", "0 2 0"]);

// function theLift(аrr) {
//   let people = Number(аrr.shift());
//   let lifts = аrr.shift().split(" ");
//   let liftSpace = 0;

//   for (let i = 0; i < lifts.length; i++) {
//     let currentLift = Number(lifts[i]);
//     if (currentLift < 4) {
//       if (people >= 4) {
//         if (currentLift != 0) {
//           people -= 4 - currentLift;
//           currentLift = 4;
//           lifts[i] = currentLift;
//         } else {
//           currentLift = 4;
//           people -= currentLift;
//           lifts[i] = currentLift;
//         }
//       } else {
//         currentLift += people;
//         people = 0;
//         lifts[i] = currentLift;
//       }
//     }
//   }
//   if (people != 0) {
//     console.log(`There isn't enough space! ${people} people in a queue!`);
//     console.log(lifts.join(" "));
//   } else {
//     for (let wagon of lifts) {
//       if (wagon === 4) {
//         liftSpace++;
//       }
//     }
//     if (liftSpace != lifts.length) {
//       console.log("The lift has empty spots!");
//       console.log(`${lifts.join(" ")}`);
//     } else {
//       console.log(`${lifts.join(" ")}`);
//     }
//   }
// }

// function lift(a) {
//     let people = +a.shift();
//     const cart = a[0].split(" ").map(Number);
 
//     const sumOfPassangers = cart.reduce((a, b) => a + b);
 
//     const capacity = cart.length * 4;
//     let i = 0;
//     let sum = 0;
//     let isTrue = true;
//     while (i < cart.length) {
//       if (people > capacity - sumOfPassangers && isTrue) {
//         console.log(
//           `There isn't enough space! ${
//             people - (capacity - sumOfPassangers)
//           } people in a queue!`
//         );
//         isTrue = false;
//       }
//       if (people >= 4 - cart[i]) {
//         sum = 4 - cart[i];
//         cart[i] += sum;
//         people -= sum;
//       } else if (people !== 0) {
//         cart[i] = people;
//         people = 0;
//         console.log("The lift has empty spots!");
//         break;
//       } else {
//         console.log("The lift has empty spots!");
//         break;
//       }
//       i++;
//     }
//     console.log(cart.join(" "));
//   }
 
//   lift([
//     "20",
//     "0 2 0"
//    ]  
//    )