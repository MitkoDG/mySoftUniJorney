function solve(arr) {
    console.log(arr.length);
    let firstN = arr[0]
    let lastN = arr[arr.length-1]
    let result = firstN+lastN
    console.log(result);
    console.log(arr[0] + arr[arr.length-1]);
    
    arr[arr.length] = 50

    console.log(arr[3]);

    arr.push(60)
    console.log(arr[4]);

    console.log(arr.length);
    console.log(arr.join(" "));

    arr[79] = 70
    console.log(arr)
    console.log(arr[5]);
}
solve([20,30,40])