function maxNumber(arr) {
    let arrL = arr.length;
    let topArr = [];
    
    for (let i = 0; i < arrL; i++) {
        let currentNum = arr[i]
        let isTop = true;
        for (let j = i + 1; j < arrL; j++) {
            let rightNum = arr[j]
            if (rightNum >= currentNum) {
                isTop = false
                break;
            }

        }
        if (isTop) {
            topArr.push(currentNum)
            isTop = true;
        }

    }
    let result = topArr.join(" ")
    console.log(result);
}
// maxNumber([1, 4, 3, 2])
maxNumber([14, 24, 3, 19, 15, 17])
// Write a function to find all
// the top integers in an array. 
// A top integer is an integer which is bigger
// than all the elements to its right. 