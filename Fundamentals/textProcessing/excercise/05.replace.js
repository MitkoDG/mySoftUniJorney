function replace(str) {
    let result = "";
    for (let char of str) {
        if (char !== result[result.length - 1]) {
            result+=char
        }
    }
    console.log(result);
}
replace('aaaaabbbbbcdddeeeedssaa')