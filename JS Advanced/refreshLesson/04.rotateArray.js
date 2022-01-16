function rotateArray(arr, num) {
  for (let i = 0; i < num; i++) {
    let popedEl = arr.pop();
    arr.unshift(popedEl);
  }
  console.log(arr.join(" "));
}
rotateArray(["1", "2", "3", "4"], 2);
rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15);
