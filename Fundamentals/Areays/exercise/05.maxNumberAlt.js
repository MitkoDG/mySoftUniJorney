function findMaxNumbers(arr) {
    let currentNum = 0;
    let end = arr.length;
    let nums = [];
    let isTheBiggest = true;

    for (let i = 0; i < end; i++) {
        currentNum = arr[i];

        for (let j = i; j < end; j++) {
            if (currentNum <= arr[j + 1]) {
                isTheBiggest = false;
                break;
            }
        }

        if (isTheBiggest) {
            nums.push(currentNum);
        }

        isTheBiggest = true;
    }

    console.log(nums.join(' '));
}
findMaxNumbers([1, 4, 3, 2])

