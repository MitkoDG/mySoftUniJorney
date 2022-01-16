function addAndRemoveElement(input) {
  let result = [];
  let step = 1;
  for (let next of input) {
    if (next == "add") {
      result.push(step);
      step++;
    } else if (next == "remove") {
      result.pop();
      step++;
    }
  }

  let resultL = result.length;
  if (resultL == 0) {
    console.log("Empty");
  } else {
    for (const print of result) {
      console.log(print);
    }
  }
}
addAndRemoveElement(["add", "add", "add", "add"]);
addAndRemoveElement(["add", "add", "remove", "add", "add"]);
addAndRemoveElement(["remove", "remove", "remove"]);
