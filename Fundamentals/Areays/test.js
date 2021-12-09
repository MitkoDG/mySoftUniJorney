// function solve(arr) {
//   let nums = [10, 20, 30];
//   nums[4] = 50; // Will resize the array
//   console.log(nums); // [10, 20, 30, <empty>, 50]
//   console.log(nums.length); // 5
//   console.log(nums[3]); // undefined

//   console.log(nums[-5]); // undefined (invalid index)
//   nums[-5] = 8; // Will not resize the array
//   console.log(nums[-5], nums.length); // 8 5
// }
// solve();

//---------------------------

// let numbers = [1,2,3,4,5]
// let output = ''
// for ( const number of numbers) {
//   console.log(number);
//   output+=`${number}`
// }
// console.log(output);

// unshift -> array <- push
// shift   <- array -> pop

//         add  remove  start  end
// unshift   X           X
// push      X                  X

// shift          X      X
//  pop           X            X

function factorial(n) {
  console.log(n);
  if ((n === 0) || (n === 1))
    return 1;
  else
    return (n * factorial(n - 1));
}
factorial(5)