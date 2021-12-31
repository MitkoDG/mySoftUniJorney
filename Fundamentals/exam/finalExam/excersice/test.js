function tour(input) {
  let allStops = input.shift();

  let command = input.shift();

  while (command != "Travel") {
    let tokens = command.split(":");

    if (tokens[0] == "Add Stop") {
        let index = Number(tokens[1])
      if (index >= 0 && index <= allStops.length-1) {
          let left = allStops.substring(0, index)
          let right = allStops.substring(index, )
          allStops = left + tokens[2] + right
          console.log(allStops);
      }
    } else if (tokens[0] == "Remove Stop") {
        let startIndex = Number(tokens[1])
        let endIndex = Number(tokens[2])
        if ((startIndex >= 0 && startIndex <= allStops.length) && (endIndex >= 0 && endIndex <= allStops.length-1)) {
            let toCut = allStops.substring(startIndex, endIndex+1)
            let tempString = allStops.split(toCut).join("")
            allStops = tempString
        }
        console.log(allStops);
    } else if (tokens[0] == "Switch") {
        let oldString = tokens[1]
        let newString = tokens[2]
        allStops = allStops.split(oldString).join(newString)
        console.log(allStops);
    }

    command = input.shift();
  }
  
  console.log(`Ready for world tour! Planned stops: ${allStops}`);
}
tour([
  "Hawai::Cyprys-Greece",
  "Add Stop:7:Rome",
  "Remove Stop:11:16",
  "Switch:Hawai:Bulgaria",
  "Travel",
]);

// •	"Add Stop:{index}:{string}":
// o	Insert the given string at that index only if the index is valid
// •	"Remove Stop:{start_index}:{end_index}":
// o	Remove the elements of the string from the starting index to the end index (inclusive) if both indices are valid
// •	"Switch:{old_string}:{new_string}":
// o	If the old string is in the initial string, replace it with the new one (all occurrences)
