function solve(start, end){
    let startNum = start;
    let endNum = end;
    let sum = 0;
    let output = "";

    for (let i = startNum; i <= endNum; i++) {
        output += `${i} `;
        sum+=i;
    }
    console.log(output);
    console.log(`Sum: ${sum}`);

}
solve(5,10)