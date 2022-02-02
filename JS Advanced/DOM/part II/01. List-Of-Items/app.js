function addItem() {
  let inputElement = document.getElementById("newItemText");
  let itemsElement = document.getElementById("items");

  let liElement = document.createElement("li");
  liElement.textContent = inputElement.value;

  itemsElement.appendChild(liElement);
}

// function addItem() {
//   let ulElement = document.getElementById("items");
//   let liElement = document.createElement("li");
//   let inputText = document.getElementById("newItemText").value;
//   if (inputText == "") {
//     throw alert("No input");
//   } else {
//     liElement.textContent = inputText;
//     ulElement.appendChild(liElement);
//     document.getElementById("newItemText").value = "";
//   }
// }
