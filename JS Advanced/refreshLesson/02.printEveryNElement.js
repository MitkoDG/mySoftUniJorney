function printEveryNElement(arr,num) {
    let arrL = arr.length;
    let result = []
    for (let i = 0; i < arrL; i+=num) {
        result.push(arr[i])  
    }

    return result
}
printEveryNElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
)