function arrayModifier(arr) {
  let initialArr = arr
    .shift()
    .split(" ")
    .map((x) => Number(x));

  for (let inputLine of arr) {
    let inputElement = inputLine.split(" ");
    let command = inputElement[0];

    if (command == "end") {
      break;
    }
    if (command === "swap") {
      let firstIndex = Number(inputElement[1]);
      let secondIndex = Number(inputElement[2]);

      let temp = initialArr[firstIndex];
      initialArr[firstIndex] = initialArr[secondIndex];
      initialArr[secondIndex] = temp;
    } else if (command === "multiply") {
      let firstIndex = Number(inputElement[1]);
      let secondIndex = Number(inputElement[2]);

      initialArr[firstIndex] *= initialArr[secondIndex];
    } else {
      initialArr = initialArr.map((num) => num - 1); // alternative way with for
      //   for (let index = 0; index < initialArr.length; index++) {
      //     initialArr[index]--;
      //   }
    }
  }
  console.log(initialArr.join(", "));
}
arrayModifier([
  "23 -2 321 87 42 90 -123",
  "swap 1 3",
  "swap 3 6",
  "swap 1 0",
  "multiply 1 2",
  "multiply 2 1",
  "decrease",
  "end",
]);

//   •	"swap {index1} {index2}" takes two elements and swap their places.
// •	"multiply {index1} {index2}" takes element at the 1st index and multiply it with the element at 2nd index. Save the product at the 1st index.
// •	"decrease" decreases all elements in the array with 1.
