// You will receive a single number between 0 and 100, which is divided with 10 without residue (0, 10, 20, 30...).
// Your task is to create a function that visualizes a loading bar depending on that number you have received in the input.

function loadingBar(num) {
  let percentage = num;

  let howManyToReplace = num / 10;
  let percN = '%'.repeat(howManyToReplace);
  let dotN = '.'.repeat(10 - howManyToReplace);
  
  if (percentage === 100) {
      console.log('100% Complete!');
      console.log(percN);
  } else {
      console.log(`${percentage}% [${percN}${dotN}]`);
      console.log('Still loading...');
  }
}
loadingBar(30);
loadingBar(100)
