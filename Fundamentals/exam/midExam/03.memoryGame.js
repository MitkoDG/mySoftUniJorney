function memoryGame(arr) {
  let elements = arr.shift().split(" ");
  let arrL = arr.length;

  let turns = 0;
  for (let i = 0; i < arrL; i++) {
    let el = arr[i];
    if (elements.length > 0 && el === "end") {
      console.log("Sorry you lose :(");
      console.log(elements.join(" "));
      break;
    }
    if (elements.length === 0) {
      console.log(`You have won in ${turns} turns!`);
      break;
    }
    let currentNums = el.split(" ").map(Number);
    let firstI = +currentNums[0];
    let secondI = +currentNums[1];
    turns++;
    if (firstI === secondI || firstI < 0 || secondI < 0 && firstI > elements.length && secondI > sequence.length) {
      let middle = elements.length / 2;
      elements.splice(middle, 0, `-${turns}a`, `-${turns}a`);
      console.log("Invalid input! Adding additional elements to the board");
    } else if (elements[firstI] === elements[secondI] ) {
      console.log(
        `Congrats! You have found matching elements - ${elements[firstI]}!`
      );
      if (firstI < secondI) {
        elements.splice(secondI, 1, "memory");
        elements.splice(firstI, 1, "memory");
        while (elements.includes("memory")) {
          let indexOf = elements.indexOf("memory");
          elements.splice(indexOf, 1);
        }
      } else {
        elements.splice(firstI, 1, "memory");
        elements.splice(secondI, 1, "memory");
        while (elements.includes("memory")) {
          let indexOf = elements.indexOf("memory");
          elements.splice(indexOf, 1);
        }
      }
    } else if (elements[firstI] !== elements[secondI]) {
      console.log("Try again!");
    }
  }
}
memoryGame(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);
// memoryGame(["a 2 4 a 2 4", "4 0", "0 2", "0 1", "0 1", "end"]);
// memoryGame(["a 2 4 a 2 4", "0 3", "0 2", "0 1", "0 1", "end"]);

// function solve (input) {
//   let sequence = input.shift().split(' ');
//   let command = input.shift();
//   let moves = 0;

//   while (command !== 'end') {
//       let [first, second] = command.split(' ').map(Number); 
//       moves++;

//       if (first !== second && first >= 0 && first < sequence.length && second >= 0 && second < sequence.length) {
//           if (sequence[first] === sequence[second]) {
//               console.log(`Congrats! You have found matching elements - ${sequence[first]}!`);
//               sequence.splice(first, 1, 'memmory');
//               sequence.splice(second, 1, 'memmory');
//               while (sequence.includes('memmory')) {
//                   let indexOf = sequence.indexOf('memmory')
//                   sequence.splice(indexOf,1);
//               }

//           } else if (sequence[first] !== sequence[second]) {
//               console.log("Try again!");
//           }

//       } else {
//           sequence.splice(sequence.length / 2, 0, `-${moves}a`,`-${moves}a`)
//           console.log(`Invalid input! Adding additional elements to the board`);
//       }

//       let ifReady = true;

//       for (let i = 1; i < sequence.length; i++) {
//           for(let x = 0; x < sequence.length; x++) {
//               if (sequence[i] === sequence[x]) {
//                   ifReady = false;
//               }
//           }
//       }

//       if (ifReady) {
//           console.log(`You have won in ${moves} turns!`);
//           break;
//       }

//       command = input.shift();
//   }

//   if (command === 'end') {
//       console.log(`Sorry you lose :(\n${sequence.join(' ')}`);
//   }
// }
// solve(["1 1 2 2 3 3 4 4 5 5", "1 0", "-1 0", "1 0", "1 0", "1 0", "end"]);