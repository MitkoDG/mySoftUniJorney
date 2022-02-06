
window.addEventListener('load', solution);

function solution() {

  let [fullName, email, fNumber, adress, postalCode] = document.querySelectorAll('div input');

  let labelsArray = Array.from(document.querySelectorAll('div label'));

  let button = document.querySelector('input[value="Submit"]');
  let ulElement = document.getElementById('infoPreview');

  let [btnEdit, btnCont] = ulElement.parentElement.querySelectorAll('input[type="button"]');
  let obj = {};

  button.addEventListener('click', addInfo);

  function addInfo(ev) {

    [fullName, email, fNumber, adress, postalCode].forEach((el, index) => {

      obj[el.id] = el.value;

      if (fullName.value && email.value) {
        if (el.value !== '') {
          createEl('li', (labelsArray[index]).textContent, el.value, ulElement);
        }
        ev.target.disabled = true;
        Array.from(ulElement.parentElement.querySelectorAll('input[type="button"]'))
          .map(el => el.disabled = false);
      }
    });
    [fullName, email, fNumber, adress, postalCode].map(el => el.value = "");
  }
  btnEdit.addEventListener('click', edit);

  function edit(ev) {

    let liArrPrev = Array.from(ulElement.children);

    liArrPrev.forEach((li) => {
      li.remove();
    });

    Object.keys(obj).forEach((key) => {
      [fullName, email, fNumber, adress, postalCode].forEach((el) => {

        if (key === el.id) {
          el.value = obj[el.id];
        }
      });
    });
    btnEdit.disabled = true;
    btnCont.disabled = true;
    button.disabled = false;
  }

  btnCont.addEventListener('click', removeAll);

  function removeAll(ev) {
    //noob way
    // let elemenets = document.getElementById("form");
    // elemenets.parentNode.removeChild(elemenets);
    // let elemenets2 = document.getElementById("information");
    // elemenets2.parentNode.removeChild(elemenets2);
    // let element3 = document.querySelector("footer");
    // element3.parentNode.removeChild(element3);
    // let element4 = document.querySelector("h1");
    // element4.parentNode.removeChild(element4);
    // let element5 = document.querySelector("h4");
    // element5.parentNode.removeChild(element5);

    // let elH3 = document.createElement("h3");
    // elH3.textContent = "Thank you for your reservation!";
    // document.getElementById("block").appendChild(elH3);


    const blockDiv = Array.from(document.querySelectorAll('#block'));
  
    let newH3 = document.createElement('h3');
    newH3.textContent = "Thank you for your reservation!";

    blockDiv.forEach((el) => {
      el.replaceChildren(newH3);
    })
  }

  function createEl(type, key, textContent, curParent) {
    let el = document.createElement(type);
    el.textContent = `${key} ${textContent}`;
    curParent.appendChild(el);
  }
}


// alternative way

function solution() {
  let [fullNameEl, emailEl, phoneNumEl, addressEl, postalCodeEl] = document.querySelectorAll('input')
  let submitBtnEl = document.querySelector('#submitBTN')
  let editBtnEl = document.querySelector('#editBTN')
  let continueBtnEl = document.querySelector('#continueBTN')

  let submit = (e) => {
    if(fullNameEl.value && emailEl.value && phoneNumEl.value && addressEl.value && postalCodeEl.value){
       let fullNamePreviewEl = document.createElement('li');
       fullNamePreviewEl.textContent = `Full Name: ${fullNameEl.value}`

       let emailPreviewEl = document.createElement('li');
       emailPreviewEl.textContent = `Email: ${emailEl.value}`

       let phNumPreviewEl = document.createElement('li');
       phNumPreviewEl.textContent = `Phone Number: ${phoneNumEl.value}`

       let addressPreviewEl = document.createElement('li');
       addressPreviewEl.textContent = `Address: ${addressEl.value}`

       let postalCodePreviewEl = document.createElement('li');
       postalCodePreviewEl.textContent = `Postal Code: ${postalCodeEl.value}`

       document.querySelector('ul').appendChild(fullNamePreviewEl);
       document.querySelector('ul').appendChild(emailPreviewEl);
       document.querySelector('ul').appendChild(phNumPreviewEl);
       document.querySelector('ul').appendChild(addressPreviewEl);
       document.querySelector('ul').appendChild(postalCodePreviewEl);

       editBtnEl.disabled = false;
       continueBtnEl.disabled = false;
       submitBtnEl.disabled = true;

       fullNameEl.value = '';
       emailEl.value = '';
       phoneNumEl.value = '';
       addressEl.value = '';
       postalCodeEl.value = '';
    }
  }
  let edit = (e) => {
    let infoArr = Array.from(document.getElementsByTagName('li'))
    let inputArr = Array.from(document.getElementsByTagName('input'))
    
    for (let i = 0; i < infoArr.length; i++) {

      inputArr[i].value = infoArr[i].textContent.split(': ')[1];
    }

    document.querySelector('ul').innerHTML = ""

    editBtnEl.disabled = true;
    continueBtnEl.disabled = true;
    submitBtnEl.disabled = false;

  }
  let continueFunc = (e) => {
    document.querySelector('#block').innerHTML =
     "<h3>Thank you for your reservation!</h3>"
     editBtnEl.disabled = true;
     continueBtnEl.disabled = true;
     submitBtnEl.disabled = false;

  }

  submitBtnEl.addEventListener('click', submit)
  editBtnEl.addEventListener('click', edit)
  continueBtnEl.addEventListener('click', continueFunc)
}