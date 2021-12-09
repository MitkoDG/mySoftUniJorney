function solve(n, m){
    let start = n
    let end = m

    let result = 0
    let output = ""

    for (let i = start; i <= end; i++) {
        result+=i
        output+=`${i} `
    }
    console.log(output);
    console.log(`Sum: ${result}`);
}
solve(5,10);