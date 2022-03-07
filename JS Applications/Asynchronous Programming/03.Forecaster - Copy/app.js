let url = 'http://localhost:3030/jsonstore/forecaster/locations';
let submitBtn = document.getElementById('submit').addEventListener('click', getForecast)
let userInput = document.getElementById('location');

let emojies = {
    'Sunny': `\u2600`, // ☀
    'Partly sunny': `\u26C5`, //⛅
    'Overcast': `\u2601`, // ☁
    'Rain': `\u2614`, // ☂
    'Degrees': `\u00B0`  // °
}

async function getForecast() {

}
function attachEvents() {




}
attachEvents();


function createElement(type, textCon, className, parent) {
    const element = document.createElement(type);
    if (textCon) {
        element.textContent = textCon;
    }
    if (className) {
        element.className = className;
    }
    if (parent) {
        parent.appendChild(element);
    }
    return element;
}