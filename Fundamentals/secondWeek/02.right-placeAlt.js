function solve(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    if (newString === secondString) {
        console.log("Matched");
    } else {
        console.log('Not Matched');
    }
}
solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')

function solve(firstString, char, secondString) {
    let newString = firstString.replace("_", char);
    let result = (newString === secondString) ? 'Matched' : 'Not Matched'

    console.log(result);
}
solve('Str_ng', 'I', 'Strong')
solve('Str_ng', 'i', 'String')