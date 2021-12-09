function train(arr) {
  let trainWagons = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));
  let maxPeople = Number(arr.shift());
  let arrL = arr.length;
  let trainWagonsL = trainWagons.length
  for (let i = 0; i < arrL; i++) {
    let newArr = arr[i].split(" ");
    let command = newArr[0];
    let number = Number(newArr[1]);

    let newArrL = newArr.length;
    if (newArrL === 2 && command === "Add") {
      trainWagons.push(number);
    } else {
      let newNum = Number(newArr);
      for (let j = 0; j < trainWagonsL; j++) {
        if (newNum + trainWagons[j] <= maxPeople) {
          trainWagons[j] += newNum;
          break;
        }
      }
    }
  }

  console.log(trainWagons.join(" "));
}
train(["32 54 21 12 4 0 23", "75", "Add 10", "Add 0", "30", "10", "75"]);
train(["0 0 0 10 2 4", "10", "Add 10", "10", "10", "10", "8", "6"]);