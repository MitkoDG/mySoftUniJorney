function sortNum(input) {
    let sorted = input.sort((a,b) => a-b);

    let result = [];
    let sortedL = sorted.length / 2
    for (let i = 0; i < sortedL; i++) {
        let smallest = sorted.shift();
        let highest = sorted.pop();

        result.push(smallest);
        result.push(highest);
    }
    return result
}
sortNum([1, 65, 3, 52, 48, 63, 31, -3, 18, 56])



// alternative

// while (sortedL !== 0) {
//     result.push(sorted.shift())
//     result.push(sorted.pop())
// }