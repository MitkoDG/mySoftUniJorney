function solve(num) {
  let number = num;

  for (let i = 1; i <= num; i++) {
    let output = "";
    for (let j = 1; j <= i; j++) {
      output += `${i} `;
    }
    console.log(output);
  }
}
solve(6);

function solve(num) {
    let number = num;
  
    for (let i = 1; i <= num; i++) {
      console.log(`${i} `.repeat(i));
    }
  }
  solve(6);
