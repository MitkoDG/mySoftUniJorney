function matrix(arr) {
    let number = arr
    

    const rowGenerator = (num) => {
        let output = ''
        for (let i = 1; i <= num; i++) {
       
            output+=`${number} `
            
        }
        return output
    }
    
    for (let i = 1; i < number; i++) {
       
        console.log(rowGenerator(number));
        
    }
    console.log(rowGenerator(number));
}
matrix(6)