// function equal(arr) {
//     let arrL = arr.length;
//     let arr1 = []
//     let arr2 = []
//     let result = ''
//     for (let i = 0; i < arrL; i++) {
//         arr1 = arr.slice(0, i)
//         arr2 = arr.slice(i+1, arrL+1)
//         const reducer = (previousValue, currentValue) => previousValue + currentValue
//         sum1 = arr1.reduce(reducer, 0)
//         sum2 = arr2.reduce(reducer, 0)
//         if (sum1 === sum2) {
//             result+=i;
//             break;

//         } else if(sum1!= sum2){
//             result = 'no'
//         } else if(sum1 && sum2 === 0){
// result=0
//         }
//     }
// console.log(result);
// }
// equal([1, 2, 3, 3])

function sum(arr) {
  let sum = 0;
  let left = 0;
  let arrL = arr.length;
  for (let i = 0; i < arrL; i++) {
    sum += arr[i];
  }
  for (let j = 0; j < arrL; j++) {
    if (left * 2 === sum - arr[j]) {
      console.log(j);
      return;
    } else {
      left += arr[j];
    }
  }
  console.log("no");
}
sum([1, 2, 3, 3])

//--------------------
function equalSum(arr) {
  let index = 0;
  let length = arr.length;
  let sumLeft = 0;
  let sumRight = 0;
  let currentNum = 0;
  let iscoincidence = false;

  for (let i = 0; i < length; i++) {
    sumLeft = 0;
    sumRight = 0;
    currentNum = arr[i];
    index = i;
    for (let j = 0; j < i; j++) {
      let currentLeft = arr[j];
      sumLeft += currentLeft;
    }

    for (let k = i + 1; k < length; k++) {
      let currentRight = arr[k];
      sumRight += currentRight;
    }
    if (sumLeft === sumRight ) {
      console.log(index);
      iscoincidence = true;
    }
  }
  if(!iscoincidence){
      console.log('no');
  }
}
equalSum([1, 2, 3, 3]);
equalSum([1, 2]);
equalSum([1]);
equalSum([1, 2, 3]);
equalSum([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);

//-------------------------------------------------
function equalSums(arr) {

  let array = arr;
  let arrayLength = array.length;
  let sumTotal = 0;
  let sumSides = 0;

  for (let i = 0; i < arrayLength; i++) {
      let currentNumber = Number(array[i]);
      sumTotal += currentNumber;

  }
  for (let i = 0; i < arrayLength; i++) {
      let currentNumber = Number(array[i]);
      if (sumSides * 2 === sumTotal - currentNumber) {
          console.log(i)
          return;
      } else {
          sumSides += currentNumber
      }
  }
  console.log('no');
}