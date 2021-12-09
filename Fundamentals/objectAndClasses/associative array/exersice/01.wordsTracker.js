function wordsTracker(input) {
  let wordsToSearch = input.shift().split(" ");

  let myWords = {};
  for (let elements of wordsToSearch) {
    myWords[elements] = 0;
  }

  for (let word of input) {
    if (myWords.hasOwnProperty(word)) {
      myWords[word]++;
    }
  }

  let sortedEntries = Object.entries(myWords).sort((a, b) => {
    return b[1] - a[1];
  });

  sortedEntries.forEach((el) => {
    console.log(`${el[0]} - ${el[1]}`);
  });
}
wordsTracker([
  "this sentence",
  "In",
  "this",
  "sentence",
  "you",
  "have",
  "to",
  "count",
  "the",
  "occurances",
  "of",
  "the",
  "words",
  "this",
  "and",
  "sentence",
  "because",
  "this",
  "is",
  "your",
  "task",
]);


// function solve(array) {
//     let wordsToFind = array.shift().split(' ');
  
//     let occurrences = {};
  
//     for (let word of wordsToFind) {
//       let counter = 0;
//       for (let current of array) {
//         if (word === current) {
//           counter++;
//           occurrences[word] = counter;
//         } else {
//           occurrences[word] = counter;
//         }
//       }
//     }
  
//     let entries = Object.entries(occurrences);
//     entries.sort((a, b) => Number(b[1]) - Number(a[1]));
  
//     for ([key, value] of entries) {
//       console.log(`${key} - ${value}`);
//     }
//   }