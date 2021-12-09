function addAndSub(arr) {
    let arrL = arr.length;
    let oldSum = 0;
    let newSum = 0;
    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i]
        let newNum = 0;

        if (currentNum % 2 === 0) {
            newNum = currentNum + i;

        } else {
            newNum = currentNum - i;
        }
        arr[i] = newNum;
        oldSum+=currentNum
        newSum+=newNum;

    }

    console.log(arr);
    console.log(oldSum);
    console.log(newSum);
}
addAndSub([5, 15, 23, 56, 35]);