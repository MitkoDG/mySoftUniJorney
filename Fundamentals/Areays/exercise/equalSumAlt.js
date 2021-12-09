function solve(arr) {
  let sumLeft = 0;

  let sumRight = 0;

  let lengthOfArr = arr.length;

  if (lengthOfArr === 1) {
    return 0;
  }

  for (let i = 0; i < lengthOfArr; i++) {
    if (i > 0) {
      sumLeft += arr[i - 1];
    }

    sumRight += arr[i + 1];

    if (sumLeft === sumRight) {
      return i;
    } else if (i === lengthOfArr - 1) {
      return "no";
    }

    sumRight = 0;
  }
}
