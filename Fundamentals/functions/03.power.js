function power(num, pow) {
    let result = 1;
    for (let i = 1; i <= pow; i++) {
        result *= num
        
    }
    console.log(result);
}
power(2,8)