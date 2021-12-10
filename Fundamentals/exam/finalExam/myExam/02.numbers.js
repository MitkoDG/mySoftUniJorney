function numbersF(arr) {
  let sequence = arr.shift().split(" ").map(Number);
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {
    let newModification = arr[i].split(" ");
    let command = newModification[0];
    let num = Number(newModification[1]);
    let second = newModification[2];
    if (command == "Finish") {
      return answer();
    }
    if (command == "Add") {
      sequence.push(num);
    } else if (command == "Remove") {
      if (sequence.includes(num)) {
        let positionOf = sequence.indexOf(num);
        sequence.splice(positionOf, 1, "modify");
        let positionOfM = sequence.indexOf("modify");
        sequence.splice(positionOfM, 1);
      }
    } else if (command == "Replace") {
      if (sequence.includes(num)) {
        let positionOf = sequence.indexOf(num);
        sequence.splice(positionOf, 1, second);
      }
    } else if (command == "Collapse") {

      sequence = sequence.filter((x) => x >= num);
    }
  }
  function answer() {
    console.log(sequence.join(" "));
  }
}
// numbersF(["1 4 5 19", "Add 1", "Remove 4", "Finish"]);
numbersF(["1 20 -1 10", "Collapse 8", "Finish"]);
// numbersF(["5 9 70 -56 9 9", "Replace 9 10", "Remove 9", "Finish"]);

