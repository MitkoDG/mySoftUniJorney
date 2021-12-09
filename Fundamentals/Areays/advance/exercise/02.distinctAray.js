function solve(input) {
    let result = []

    for (let num of input) {
        if (!result.includes(num)) {
            result.push(num)
        }
    }
    console.log(result.join(" "));
}
solve([7, 8, 9, 7, 2, 3, 4, 1, 2])

// function solve(arr) {
//     let newArr = [];
//     let arrL = arr.length;
//     for (let i = 0; i < arrL; i++) {
//       if (!newArr.includes(arr[i])) {
//         newArr.push(arr[i]);
//       }
//     }
//     console.log(newArr.join(" "));
//   }