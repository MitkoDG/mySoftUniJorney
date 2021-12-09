function manipulator(numbers, commands) {
  for (let command of commands) {
    let tokens = command.split(" ");
    let currentCommand = tokens[0];

    switch (currentCommand) {
      case "add":
        let index = Number(tokens[1]);
        let element = +tokens[2];
        numbers.splice(index, 0, element);
        break;
      case "addMany":
        let indexAdd = +tokens[1];
        tokens.splice(0, 2);
        let numbersToAdd = tokens.map(Number);
        numbers.splice(indexAdd, 0, ...numbersToAdd);
        break;
      case "contains":
        let result = numbers.indexOf(+tokens[1]);
        console.log(result);
        break;
      case "remove":
        let indexR = Number(tokens[1]);
        numbers.splice(indexR, 1);
        break;
      case "shift":
        let position = tokens[1];
        for (let i = 0; i < position; i++) {
          let firstNumber = numbers.shift();
          numbers.push(firstNumber);
        }
        break;
      case "sumPairs":
        let resultArr = [];
        if (numbers.length % 2 !== 0) {
          numbers.push(0);
        }

        for (let i = 0; i < numbers.length - 1; i += 2) {
          let sum = numbers[i] + numbers[i + 1];
          resultArr.push(sum);
        }
        numbers = resultArr;
        break;
      case "print":
        console.log(`[ ${numbers.join(", ")} ]`);
        break;
    }
  }
}
manipulator(
  [1, 2, 3, 4, 5],
  ["addMany 5 9 8 7 6 5", "contains 15", "remove 3", "shift 1", "print"]
);
