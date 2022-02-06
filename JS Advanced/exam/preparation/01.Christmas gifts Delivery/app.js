function solution() {
  // attach event listeners to input form
  const [gifts, sent, discarded] = document.querySelectorAll("section ul");
  const input = document.querySelector("input");
  document.querySelector("button").addEventListener("click", addGift);

  // create gift elements with buttons
  function addGift() {
    const name = input.value;
    input.value = "";

    const element = e("li", name, "gift");
    const sendBtn = e("button", "Send", "sendButton");
    const discardBtn = e("button", "Discard", "discardButton");
    // sendBtn.setAttribute('id', 'sendButton');
    // discardBtn.setAttribute('id', 'discardButton');

    element.appendChild(sendBtn);
    element.appendChild(discardBtn);

    sendBtn.addEventListener("click", () => sendGift(name, element));
    discardBtn.addEventListener("click", () => discardGift(name, element));

    gifts.appendChild(element);

    sortGift();
  }

  //logic for sending gifts
  function sendGift(name, gift) {
    gift.remove();
    const element = e("li", name, "gift");
    sent.appendChild(element);

    // remove element from original list
    // create new list item
    // add element to new list
  }
  // logic for discarding gift

  function discardGift(name, gift) {
    gift.remove();
    const element = e("li", name, "gift");
    discarded.appendChild(element);
  }

  // sort gifts list
  function sortGift() {
    Array.from(gifts.children)
      .sort((a, b) => a.textContent.localeCompare(b.textContent))
      .forEach((g) => gifts.appendChild(g));
  }

  function e(type, content, className) {
    const result = document.createElement(type);
    result.textContent = content;
    if (className) {
      result.className = className;
    }
    return result;
  }
}

// function onClick(ev) {
//     let position = document.querySelector('.card ul')
//     let newGift = createAnElement('li',userInput,'gift', '')
//     let newSendBtn = document.createElement('button');
//     newSendBtn.name = 'Send'
//     newSendBtn.setAttribute('id', 'sendButton');
//     newSendBtn.appendChild(newGift)
//     position.appendChild(newGift)
// }

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
