function solve(arr1, arr2) {
  let isIdentical = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      console.log(`Arrays are not identical. Found difference at ${i} index`);
      isIdentical = false;
      break;
    }
  }
  let sum = 0
  if(isIdentical){
      for (const unparsed of arr1) {
          sum+=Number(unparsed)
      }
      console.log(`Arrays are identical. Sum: ${sum}`);
  }
}
solve(["10", "20", "30"], ["10", "20", "30"]);
solve(['1','2','3','4','5'], ['1','2','4','4','5'])
solve(['1'], ['10'])

