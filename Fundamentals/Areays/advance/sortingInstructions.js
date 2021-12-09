console.log("---------------Array.sort();---------------");
// .sort();
arr = [5, 10, 1, -15, 0];

// Когато 'a' е отпред значи от най-малкото към най-голямото
// Следователно когато 'б' е отпред от най-голямо към най-малко

// Sort by Ascending Order
let sortedArr = arr.slice(0).sort((a, b) => {
    return a - b;
});
printArr(sortedArr, `- Ascending Order.`);

// Sort by Descending Order
sortedArr = arr.slice(0).sort((a, b) => {
    return b - a;
});
printArr(sortedArr, `- Descending Order.`);

// Sort by Ascending Order using String's length
arr = ['b', 'ccc', 'aa'];
sortedArr = arr.slice(0).sort((a, b) => {
    return a.length - b.length;
});
printArr(sortedArr, `- Ascending Order based on String's length`);

sortedArr = arr.slice(0).sort((a, b) => {
    return b.length - a.length;
});
printArr(sortedArr, `- Descending Order based on String's length`);

// Sort by Alphabetical Order
sortedArr = arr.slice(0).sort((a, b) => {
    return a.localeCompare(b); // Compares ASCII code
});
printArr(sortedArr, `- Alphabetical Order`);

// Sort by both Ascending Order using String's length and Alphabetical Order
arr = ['bbb', 'ccc', 'aaa'];
sortedArr = arr.slice(0).sort((a, b) => {
    return a.length - b.length || a.localeCompare(b);
});
printArr(sortedArr, `- Alphabetical and Ascending Order with Strings`);