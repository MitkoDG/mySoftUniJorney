function practice(input){
    let newArr = []
    let arrL = input.length
    for (let i = 0; i < arrL; i++) {
        if (input[i] < 0 ) {
            newArr.unshift(input[i])
        } else {
            newArr.push(input[i])
        }
        
    }
    console.log(newArr.join('\n'));
}
practice(['7', '-2', '8', '9'])