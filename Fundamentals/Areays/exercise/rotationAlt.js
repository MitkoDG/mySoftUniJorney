function arraysIntro(arr, rotationCount) {
  let arrOfElement = arr;
  let rotation = rotationCount;


  for (let index = 0; index < rotation; index++) {
    let numberToMove = arrOfElement.shift();
    arrOfElement.push(numberToMove);
  }
  console.log(arrOfElement.join(' '));
}
arraysIntro([51, 47, 32, 61, 21], 2);
arraysIntro([32, 21, 61, 1], 4);
arraysIntro([2, 4, 15, 31], 5);

//-----------------------------------

// function solve(list, nRotations) {
//     for (let i = 0; i < nRotations; i++) {
//         let firstElement = list[0];

//         for (let j = 0; j < list.length - 1; j++) {
//             list[j] = list[j + 1];
//         }
//         let lastIndex = list.length - 1;
//         list[lastIndex] = firstElement;
  
//     }
//     console.log(list.join(' '))
// }
// solve([51, 47, 32, 61, 21], 2);
// solve([32, 21, 61, 1], 4);
// solve([2, 4, 15, 31], 5);