// function solve() {
//   let inputElement = document.getElementById('input');
//   let textArr = inputElement.value.split(".").filter(s => s !== "");
//   let resultDiv = document.getElementById('output')

//   while (textArr.length > 0) {
//     let text = textArr.splice(0, 3).join('. ') +'.';
//     let p = document.createElement('p');
//     p.textContent = text;
//     resultDiv.appendChild(p);
//   }
// }

function solve() {
  let inputText = document.getElementById('input');
  let resultDiv = document.getElementById('output');
  let dividedOnParts = inputText.value.split('. ').filter(s => s !== "");

  
  while (dividedOnParts.length > 0) {
    let pTag = document.createElement('p');
    let text = dividedOnParts.splice(0,3).join('. ') + '.';
    pTag.textContent = text;
    resultDiv.appendChild(pTag)
  }




}