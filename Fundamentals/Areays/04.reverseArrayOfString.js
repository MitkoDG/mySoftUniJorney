function reverse(arr){
    let revArr = []
    for (let i = arr.length-1; i >= 0; i--) {
        revArr.push(arr[i])
        
    }
    console.log(revArr.join(' '));
}
reverse(['a', 'b', 'c', 'd', 'e'])

// ----------------------------------

function reverseNew(arr) {
    for (let i = 0; i < arr.length / 2; i++) {
        let buffer = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = buffer
        
    }
    console.log(arr.join(' '));
}
reverseNew(['a', 'b', 'c', 'd', 'e'])
reverseNew(['33', '123', '0', 'dd'])

//------------------------------

function reverseSec(arr) {
    for (let i = 0; i < Math.ceil(arr.length / 2); i++) {
        let buffer = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = buffer
        
    }
    console.log(arr.join(' '));
}
reverseSec(['a', 'b', 'c', 'd', 'e'])
reverseSec(['33', '123', '0', 'dd'])