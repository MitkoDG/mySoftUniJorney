function solve(num) {
    num = num.toString()
    let sum = 0
    for (let i = 0; i < num.length; i++) {
        sum+= Number(num[i])
    }
    let result = sum.toString().includes('9');
    console.log(result
        ? `${num} Amazing? True` 
        : `${num} Amazing? False`
        );
}
solve(1233)

function solve(num) {
    const result = [...num.toString()]
        .map(Number)
        .reduce((agr, val) => agr + val)
        .toString()
        .indexOf('9') === -1 ? `${num} Amazing? False` : `${num} Amazing? True`;

    console.log(result);
}