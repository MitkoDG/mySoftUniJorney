function solve(arr) {
  let array = arr.slice(0);
  let sequenceElement = array.shift().split(" ");
  let moves = 0;
  let result = sequenceElement.length;

  for (let i of array) {
    if (i === 'end') {
      break;
    }
    let [indexOne, indexTwo] = i.split(" ");
    indexOne = Number(indexOne);
    indexTwo = Number(indexTwo);
    let first = sequenceElement[indexOne];
    let second = sequenceElement[indexTwo];
    if (result === 0) {
      break
    }

    if (
      indexOne === indexTwo ||
      indexOne < 0 ||
      indexOne >= result ||
      indexTwo < 0 ||
      indexTwo >= result
    ) {
      let midle = result / 2
      moves++;
      sequenceElement.splice(midle, 0, `-${moves}a`);
      sequenceElement.splice(midle, 0, `-${moves}a`);
      result = sequenceElement.length
      console.log("Invalid input! Adding additional elements to the board");
      continue
    }
    if (first === second) {
      moves++;
      sequenceElement.splice(indexOne, 1);

      if (indexTwo === 0) {
        sequenceElement.splice(indexTwo, 1);
      } else {
        sequenceElement.splice(indexTwo - 1, 1);
      }
      result = sequenceElement.length

      console.log(`Congrats! You have found matching elements - ${first}!`);
    }
    if (
      first !== second
    ) {
      moves++;
      console.log("Try again!");
    }


  }

  if (result === 0) {
    console.log(`You have won in ${moves} turns!`);
  } else {
    console.log(`Sorry you lose :(`)
    console.log(`${sequenceElement.join(" ")}`);
  }
}
//--------------------------------------------
function reception(arr) {

  let empOne = Number(arr.shift());
  let empTwo = Number(arr.shift());
  let empThree = Number(arr.shift());
  let students = Number(arr);
  let totalTime = empOne + empTwo + empThree;
  let hoursNeeded = 0;

  while (students > 0) {
    hoursNeeded++;

    if (hoursNeeded % 4 == 0) {
      continue;
    }

    students -= totalTime;
  }
  console.log(`Time needed: ${ hoursNeeded }h.`)
}