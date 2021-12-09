// function solve(num) {
//   let number = num;

//   for (let i = 1; i <= num; i++) {
//     console.log(`${i} `.repeat(i));
//   }
// }
// solve(9);

function solve2(num) {
  let number = num;

  for (let i = 1; i <= number; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output += `${i} `;
    }
    console.log(output);
  }
  
}
solve2(3);
