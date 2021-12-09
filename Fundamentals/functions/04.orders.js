function calculate(product, quantity) {
  let total = 0;
  let calculateTotalIfCoffee = () => quantity * 1.5
  switch (product) {
    case "coffee":
    total = calculateTotalIfCoffee();
      total = quantity * 1.5;
      break;
    case "water":
      total = quantity * 1.0;
      break;
    case "coke":
      total = quantity * 1.4;
      break;
    case "snacks":
      total = quantity * 2.0;
      break;
  }
  console.log(total.toFixed(2));
}
calculate('water', 5);
calculate('coffee', 3)
