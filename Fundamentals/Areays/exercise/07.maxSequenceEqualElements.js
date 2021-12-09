function maxSequence(arr) {
    let arrLength = arr.length;
    let maxArr = [];
  
    for (let i = 0; i < arrLength; i++) {
      let firstElement = arr[i];
      let tempArr = [];
      tempArr.push(firstElement);
      for (let j = i + 1; j < arrLength; j++) {
        let secondElement = arr[j];
        if (firstElement == secondElement) {
          tempArr.push(secondElement);
        } else {
          break;
        }
      }
      if (tempArr.length > maxArr.length) {
        maxArr = tempArr;
      }
    }
    console.log(maxArr.join(" "));
  }
  maxSequence([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
  maxSequence([1, 1, 1, 2, 3, 1, 3, 3]);
  maxSequence([4, 4, 4, 4]);
  maxSequence([0, 1, 1, 5, 2, 2, 6, 3, 3]);
  
// Write a function that finds the longest sequence of equal elements in an array of numbers. 
// If several longest sequences exist, print the leftmost one.
