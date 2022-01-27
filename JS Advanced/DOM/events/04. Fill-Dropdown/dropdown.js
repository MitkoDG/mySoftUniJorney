function addItem() {
  let newText = document.getElementById("newItemText").value;
  let newValue = document.getElementById("newItemValue").value;

  let option = document.createElement("option");
  option.text = newText;
  option.value = newValue;

  let manu = document.getElementById("menu");
  if (newText !== "" && newValue !== '') {
    manu.appendChild(option);
  }

  
  newText = document.getElementById("newItemText").value = "";
  newValue = document.getElementById("newItemValue").value = "";
}
