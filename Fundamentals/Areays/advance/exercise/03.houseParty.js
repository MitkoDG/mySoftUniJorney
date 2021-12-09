function houseParty(arr) {
  let guessList = [];
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    let command = arr[i].split(" ");
    let name = command[0];
    if (guessList.includes(command[0])) {
      // if the name is alredy in the list
      if (command.includes("not")) {
        let position = guessList.indexOf(command[0]);
        guessList.splice(position, 1);
      } else {
        console.log(`${name} is already in the list!`);
      }
    } else {
      //
      if (!guessList.includes(command[0])) {
        if (command.includes("not")) {
          console.log(`${name} is not in the list!`);
        } else {
          guessList.push(name);
        }
      }
    }
  }
  console.log(guessList.join("\n"));
}
houseParty([
  "Allie is going!",
  "George is going!",
  "John is not going!",
  "George is not going!",
]);
houseParty(['Tom is going!',
'Annie is going!',
'Tom is going!',
'Garry is going!',
'Jerry is going!']
)
