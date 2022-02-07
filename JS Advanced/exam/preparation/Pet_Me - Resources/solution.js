function solve() {
  // add a new pet to the list if all inputs are filled and age is a number
  // - see the structure in the file
  // - add a button Contact with owner

  // const userInput = document.querySelectorAll('#container input');
  // const [name, age, kind, owner] = [...userInput]
  const container = document.querySelector("#container");
  const adoptionSection = document.querySelector("#adoption > ul");
  const adoptedSection = document.querySelector("#adopted > ul");

  const [name, age, kind, currOwner, addButton] = [...container.children]; // children ?!

  addButton.addEventListener("click", addItem);

  function addItem(ev) {
    ev.preventDefault();

    if (!(name.value && Number(age.value) && kind.value && currOwner.value)) { // checking for empty input and correct parse to num 
      return;
    }

    const liElement = document.createElement("li");
    const pElement = document.createElement("p");
    pElement.innerHTML = `<strong>${name.value}</strong> is a <strong>${age.value}</strong> year old <strong>${kind.value}</strong>`;

    const spanElement = createEl("span", `Owner: ${currOwner.value}`, "");
    const finalButton = createEl("button", "Contact with owner", "");

    liElement.appendChild(pElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(finalButton);
    adoptionSection.appendChild(liElement);

    finalButton.addEventListener("click", toContact);
    [name, age, kind, currOwner, addButton].map((el) => (el.value = ""));
    // - when clicked a new button appears Yes I take it in a new div
    // when click button Yes ... move the div to a new section
    // - option to change the owner name
  }

  function toContact(ev) {
    const liElement = ev.target.parentElement;
    ev.target.remove();

    const takeItButton = createEl("button");
    takeItButton.textContent = "Yes! I take it!";

    const newDiv = document.createElement("div");
    const inputField = createEl("input", "", { placeholder: "Enter your names"});

    newDiv.appendChild(inputField);
    newDiv.appendChild(takeItButton);

    liElement.appendChild(newDiv);

    takeItButton.addEventListener("click", takeIt);
  }
  // when click the Check button - delete the list item
  function takeIt(ev) {
    const parentElement = ev.target.parentElement; // getting the p
    const inputField = parentElement.querySelector("input");
    const liElement = parentElement.parentElement;
    const button = ev.target;

    if (!inputField.value) {
      return;
    }
    button.textContent = "Checked";

    adoptedSection.appendChild(liElement);

    const spanElement = liElement.querySelector("span");
    spanElement.textContent = `New Owner: ${inputField.value}`;
    liElement.appendChild(spanElement);

    inputField.remove();
    button.remove();

    const checkButton = createEl("button", "Checked");
    liElement.appendChild(checkButton);

    checkButton.addEventListener("click", (ev) => {
      ev.target.parentElement.remove();
    });
  }

  function createEl(type, content, attributes) {
    let result = document.createElement(type);

    if (content) {
      result.textContent = content;
    }

    if (attributes) {
      Object.assign(result, attributes);
    }

    return result;
  }
}
