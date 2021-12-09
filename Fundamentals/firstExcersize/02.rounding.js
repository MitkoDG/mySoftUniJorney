function solve(num, prec) {
  let precision = prec;
  let ourNumber = num;

  if (precision > 15) {
    precision = 15;
  }
  let result = ourNumber.toFixed(precision);
  console.log(parseFloat(result));
}
solve(3.5, 2);
