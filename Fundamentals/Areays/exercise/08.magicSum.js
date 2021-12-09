function magic(array, sum) {
  let arr = array;
  let magicNum = sum;
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {

    for (let j = 1; j < arrL - 1; j++) {
      if (i === j) {
        continue;
      }
      let firstN = arr[i];
      let secN = arr[j];
      let sumN = firstN + secN;

      if ( sumN === magicNum) {
        console.log(`${firstN} ${secN}`);
       
      }
    }
  }
}
magic([1, 7, 6, 2, 19, 23], 8);
// magic([14, 20, 60, 13, 7, 19, 8], 27);
// magic([1, 2, 3, 4, 5, 6], 6);

// Write a function, which prints all unique pairs in an array of integers whose sum is equal to a given number.

function findMagicNum(numsArr, magicNum) {
  let sum = 0;
  let end = numsArr.length;

  for (let i = 0; i < end; i++) {
    for (let j = i; j < end - 1; j++) {
      sum = numsArr[i] + numsArr[j + 1];
      if (sum === magicNum) {
        console.log(numsArr[i], numsArr[j + 1]);
      }
    }
  }
}
// findMagicNum([1, 7, 6, 2, 19, 23], 8);
// findMagicNum([14, 20, 60, 13, 7, 19, 8], 27);
findMagicNum([1, 2, 3, 4, 5, 6], 6);