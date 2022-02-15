function solution() {
  let [giftsList, sendGift, discardGift] = document.querySelectorAll('section ul');
  let userInput = document.querySelector('input');
  document.querySelector('button').addEventListener('click', addGift);

  // userInput.value = 'New car' // for test reason

  function addGift(event) {
    event.preventDefault();
    let inputValue = userInput.value;
    let newLiGift = newEl('li',inputValue,'gift','');
    let sendBtn = newEl('button','Send','',newLiGift);
    sendBtn.setAttribute('id', 'sendButton');
    let discBtn = newEl('button','Discard','',newLiGift);
    discBtn.setAttribute('id', 'discardButton');

    giftsList.appendChild(newLiGift);

    sendBtn.addEventListener('click', sendGiftF);
    discBtn.addEventListener('click', discGiftF);
    userInput.value = '';
    sortGifts()
  }

  function sendGiftF(event) {
    event.preventDefault();
    let liElToSend = event.target.parentElement;
    event.target.nextSibling.remove();
    event.target.remove()
    sendGift.appendChild(liElToSend);
  }

  function discGiftF(event) {
    event.preventDefault();
    let liElToSend = event.target.parentElement;
    event.target.previousSibling.remove();
    event.target.remove()
    discardGift.appendChild(liElToSend);
  }

  function sortGifts() {
    Array.from(giftsList.children)
      .sort((a,b)=>a.textContent.localeCompare(b.textContent))
      .forEach((g)=>giftsList.appendChild(g));
  }


  function newEl(type, content, className, appender) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
      result.className = className;
    }
    if (appender) {
      appender.appendChild(result);
    }
    return result;
  }
}

// function createAnElement(type, content, attribute, appender) {
//     const el = document.createElement(type);
//     if (attribute) {
//         el.setAttribute('class', attribute);
//         el.textContent = content;
//     } else if (content) {
//         el.textContent = content;
//     }
//     if (appender) {
//         appender.appendChild(el);
//     }
//     return el;
// }
