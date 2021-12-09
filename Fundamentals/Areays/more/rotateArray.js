function array(arr) {

    let arrWithoutRotationN = [];
    let arrL = arr.length - 1;
    for (let i = 0; i < arrL; i++) {
        arrWithoutRotationN.push(arr[i])
        
    }
    let rotationTimes = arr[arr.length - 1];
    for (let i = 0; i < rotationTimes; i++) {
        let numberToMove = arrWithoutRotationN.pop();
        arrWithoutRotationN.unshift(numberToMove);
    }

    console.log(arrWithoutRotationN.join(" "));
}
array(['1', '2', '3', '4', '2']);
array(['Banana', 'Orange', 'Coconut', 'Apple', '15']);