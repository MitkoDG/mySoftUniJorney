function check(num1, num2, num3) {
  let totalNegative = 0;
  if (isNegative(num1)) {
    totalNegative++;
  }
  if (isNegative(num2)) {
    totalNegative++;
  }
  if (isNegative(num3)) {
    totalNegative++;
  }
  if (totalNegative % 2 == 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
  function isNegative(number) {
    return number < 0;
  }
}



check(5, 12, -15);
check(-6, -12, 14);
