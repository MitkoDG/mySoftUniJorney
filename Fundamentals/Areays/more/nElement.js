function array(arr) {
    let nStep = Number(arr[arr.length - 1])
    let tempOutput = '';
    let arrL = arr.length - 1

    for (let i = 0; i < arrL; i+=nStep) {
        let tempArr = arr[i]
        tempOutput+=tempArr+" " 
    }
    console.log(tempOutput);

}
array(['5', '20', '31', '4', '20', '2']);
array(['dsa', 'asd', 'test', 'test', '2'])
array(['1', '2', '3', '4', '5', '6'])