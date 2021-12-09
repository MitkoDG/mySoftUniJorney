function tourTask(input) {
  let actions = {
    'Add Stop': add,
    'Remove Stop': remove,
    'Switch': swap

  }
  // store initial string
  let result = input.shift()
  // for each input line, until Travel
  // - determine command
  // - execute command with given arguments
  // - print current result

  while (input[0] != "Travel") {
    let tokens = input.shift().split(":")
    let command = tokens[0]
    let action = actions[command]
    action(tokens[1], tokens[2])

    console.log(result);
  }
  // print final result
  console.log('Ready for world tour! Planned stops: ' + result);
  // Add stop
  // - validate index
  // - insert given string into result
  function add(index,string) {
    index = Number(index);
    if (validate(index)) {
      let left = result.substring(0, index)
      let right = result.substring(index)
      result = left + string + right
    }
  }
  // remove Stop
  // - validate both indexes
  // - remove part of the result from start to end ( inclusive )
  function remove(start, end) {
    start = Number(start)
    end = Number(end)
    if (validate(start) && validate(end)) {
      let left = result.substring(0, start)
      let right = result.substring(end + 1)
      result = left + right
    }
  }
  // Switch
  // - replace all accurences of aldString with newString
  function swap(oldString, newString) {
    let pattern = new RegExp(oldString, 'g')
    result = result.replace(pattern, newString)
  }
  function validate(index) {
    return (index >= 0) && (index < result.length)
  }
}
tourTask(["Hawai::Cyprys-Greece",
"Add Stop:7:Rome",
"Remove Stop:11:16",
"Switch:Hawai:Bulgaria",
"Travel"])


























// function solve(arr) {
//     let stops = arr.shift();
//     const commands = {
//       addStop: (index, string, stops) => {
//         if (stops[+index] !== undefined) {
//           const first = stops.slice(0, +index);
//           const second = stops.slice(+index);
//           return first + string + second;
//         } else {
//           return stops;
//         }
//       },
//       removeStop: (startIndex, endIndex, stops) => {
//         if (stops[+startIndex] !== undefined && stops[+endIndex] !== undefined) {
//           const first = stops.slice(0, +startIndex);
//           const second = stops.slice(+endIndex + 1);
//           return first + second;
//         } else {
//           return stops;
//         }
//       },
//       switchStop: (oldString, newString, stops) => {
//         if (stops.includes(oldString)) {
//           while(stops.includes(oldString)) {
//             return stops.replace(oldString, newString);
//           }
//         } else {
//           return stops;
//         }
//       },
//     };
//     while (arr[0] != "Travel") {
//       let [command, ...rest] = arr.shift().split(":");
//       if (command === "Add Stop") {
//         stops = commands["addStop"](rest[0], rest[1], stops);
//         console.log(stops);
//       } else if (command === "Remove Stop") {
//         stops = commands["removeStop"](rest[0], rest[1], stops);
//         console.log(stops);
//       } else if (command === "Switch") {
//         stops = commands["switchStop"](rest[0], rest[1], stops);
//         console.log(stops);
//       }
//     }
//     console.log(`Ready for world tour! Planned stops: ${stops}`);
//   }