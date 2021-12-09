// function sorting(arr) {
//   let sortedArrL = arr.sort((a, b) => {
//     return a.length - b.length;
//   });
//   let sortedArrAlphabet = sortedArrL.sort((a, b) => {
//     return a.localeCompare(b);
//   });
//   console.log(sortedArrAlphabet.join('\n'));
// }

// sorting(["alpha", "beta", "gamma"]);
// Write a function that orders an array of strings, by their length in ascending order as primary criteria, and by alphabetical value in ascending order as second criteria. The comparison should be case-insensitive.
// The input comes as an array of strings.
// The output is the ordered array of strings, each on a separate line.


// function solve(input) {
//     let sortedArr = input.sort((a, b) => {
//         return a.length - b.length || a.localeCompare(b);
//     });


//         console.log(sortedArr.join('\n'));

// }
// solve(["alpha", "beta", "gamma"]);

function compare(arr) {

    const sorted = arr.sort().sort((a, b) => a.length - b.length);
    console.log(sorted.join('\n'))
}
compare(["alpha", "beta", "gamma"]);