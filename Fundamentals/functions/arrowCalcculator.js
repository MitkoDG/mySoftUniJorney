//---- ARROW function -----
function calc(number1, number2, operand) {
  let result = 0;
//   let multiply = (num1, num2) => num1 * num2;
  switch (operand) {
    case "multiply":
      result = multiply(number1, number2);
      break;
    case "divide":
      result = devide(number1, number2);
      break;
    case "add":
      result = add(number1, number2);
      break;
    case "substract":
      result = substract(number1, number2);
      break;
    default:
      console.log("Error");
      break;
  }

  console.log(result);

  function devide(num1, num2) {
    return num1 / num2;
  }
  function multiply(num1, num2) {
    return num1 * num2;
  }
  function add(num1, num2) {
    return num1 + num2;
  }
  function substract(num1, num2) {
    return num1 - num2;
  }
}
calc(1, 2, "add");
calc(5, 2, "multiply");
