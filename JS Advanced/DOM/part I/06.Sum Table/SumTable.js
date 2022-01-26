// function sumTable() {
//     let costElements = document.querySelectorAll('tr td:nth-of-type(2)');

//     let sum = Array.from(costElements).reduce((a, x) => {
//         let currentValue = Number(x.textContent) || 0;
//         return a + currentValue;
//     }, 0);

//     let resultElement = document.getElementById('sum');
//     resultElement.textContent = sum;
// }

// alternative way

function sumTable() {
    let costElements = document.querySelectorAll('tr td:nth-of-type(2)')
    
    let result = Array.from(costElements)

    let sum = 0;
    
    for (let i = 0; i < result.length-1; i++) {
        sum += Number(result[i].textContent)
    }

    let resultElement = document.getElementById('sum')
    resultElement.textContent = sum

}