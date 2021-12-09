function solve(n,k) {
    let arr = [];
    arr.push(1);
    for (let current = 1; current < n; current++) {
        let start = Math.max(0, current - k)
        let end = current - 1;
        let sum = 0;
        for (let i = start; i < end; i++) {
           sum+=arr[i];    
        }
        arr[current] = sum;
        
    }
    console.log(arr);
}
solve(8,3)