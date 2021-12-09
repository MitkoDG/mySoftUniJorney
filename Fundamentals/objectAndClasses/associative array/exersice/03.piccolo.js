function parking(input) {
  let parking = {};
  for (let element of input) {
    let [command, car] = element.split(", ");
    if (command === "IN") {
      parking[car] = command;
    } else if (command === "OUT") {
      delete parking[car];
    }
  }
  let arrayOfKeys = Object.keys(parking);
  let sortedNumbers = arrayOfKeys.sort((a, b) => {
    return a.localeCompare(b);
  });
  if (sortedNumbers.length === 0) {
    console.log("Parking Log is Empty");
  } else {
    console.log(sortedNumbers.join("\n"));
  }
}
parking([
  "IN, CA2844AA",
  "IN, CA1234TA",
  "OUT, CA2844AA",
  "IN, CA9999TT",
  "IN, CA2866HI",
  "OUT, CA1234TA",
  "IN, CA2844AA",
  "OUT, CA2866HI",
  "IN, CA9876HH",
  "IN, CA2822UU",
]);
