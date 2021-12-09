function garageTask(input) {
  let garage = new Map();

  for (let line of input) {
    line = line.split(" - ")
    let currGarage = line[0]
    let currCar = line[1]

    if (!garage.has(currGarage)) {
      garage.set(currGarage, [])
    }
    garage.get(currGarage).push(currCar)

  }
  let output = Array.from(garage.entries())

  for (let entry of garage) {
    console.log(`Garage № ${entry[0]}`);
    for (let subEntry of entry[1]) {
      while (subEntry.includes(":")) {
        subEntry = subEntry.replace(":", " -")
      }
      console.log(`--- ${subEntry}`);
    }
  }

}
garageTask([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat",
]);
