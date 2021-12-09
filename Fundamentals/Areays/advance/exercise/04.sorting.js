function sort(arr) {
    let resultArr = []
    let sortedArr = arr.sort((a,b)=>{
        return a - b;
    })
    while (sortedArr.length !== 0) {
        let bigNumber = sortedArr.pop();
        let smallNumber = sortedArr.shift();

        resultArr.push(bigNumber);
        resultArr.push(smallNumber);
    }
    console.log(resultArr.join(' '));
}
sort([1, 21, 3, 52, 69, 63, 31, 2, 18, 94])