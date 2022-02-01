// function extractText() {
//     let ulElement = document.getElementById('items');

//     let textareaElement = document.getElementById('result');
//     textareaElement.textContent = ulElement.textContent;
// }

//alternative way

// function extractText() {
//     let items = document.querySelectorAll('#items li')
//     let result = document.querySelector('#result')

//     for (const line of items) {
//         result.value += line.textContent + "\n"
//     }
// }

// another alternative way

function extractText() {
    let liElement = [...document.getElementsByTagName('li')];
    let elementText = liElement.map(e => e.textContent)

    document.getElementById('result').value = elementText.join('\n')

}