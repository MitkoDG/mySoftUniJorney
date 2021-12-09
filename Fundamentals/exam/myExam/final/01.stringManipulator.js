function manipulatorTask(input) {
  let theString = input.shift();

  while (input[0] != "End") {
    let tokens = input.shift().split(" ");

    if (tokens[0] == "Translate") {
      theString = theString.split(tokens[1]).join(tokens[2]);
      console.log(theString);
    } else if (tokens[0] == "Includes") {
      let stringToCheck = tokens[1];
      if (theString.includes(stringToCheck)) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (tokens[0] == "Start") {
      let stringToCheck = tokens[1];
      let firstWord = theString.split(" ");
      if (firstWord[0] == stringToCheck) {
        console.log("True");
      } else {
        console.log("False");
      }
    } else if (tokens[0] == "Lowercase") {
      theString = theString.toLowerCase();
      console.log(theString);
    } else if (tokens[0] == "FindIndex") {
      let char = tokens[1];
      let indexOf = theString.lastIndexOf(char);
      console.log(indexOf);
    } else if (tokens[0] == 'Remove') {
      let start = Number(tokens[1]);
      let end = Number(tokens[2]);

      let textArr = theString.split('')
      let remove = textArr.splice(start, end).join('')
      theString = theString.replace(remove, '')
      console.log(theString)
    }
  }
}
manipulatorTask([
  "//Thi5 I5 MY 5trING!//",
  "Translate 5 s",
  "Includes string",
  "Start //This",
  "Lowercase",
  "FindIndex i",
  "Remove 0 10",
  "End",
]);

console.log('---');
manipulatorTask(["*S0ftUni is the B3St Plac3**",
  "Translate 2 o",
  "Includes best",
  "Start the",
  "Lowercase",
  "FindIndex p",
  "Remove 2 7",
  "End"])

