function prinAnArray(input, arr) {
  let result = [];
  for (const arr of input) {
    result.push(arr);
  }
  console.log(result.join(arr));
}
prinAnArray(["One", "Two", "Three", "Four", "Five"], "-");
