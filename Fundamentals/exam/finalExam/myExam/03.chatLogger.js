function chatLogger(arr) {
  let message = [];
  let arrL = arr.length;

  for (let i = 0; i < arrL; i++) {
    let output = arr[i].split(" ");
    let command = output[0];
    let incomeMsg = output[1];
    let incomeMsgNew = output[2];
    if (output == "end") {
      break;
    }
    if (command == "Chat") {
      message.push(incomeMsg);
    } else if (command == "Delete") {
      if (message.includes(incomeMsg)) {
        let indexOfMsg = message.indexOf(incomeMsg);
        message.splice(indexOfMsg, 1);
      }
    } else if (command == "Edit") {
      if (message.includes(incomeMsg)) {
        let indexOfMsg = message.indexOf(incomeMsg);
        message.splice(indexOfMsg, 1, incomeMsgNew);
      }
    } else if (command == "Pin") {
      if (message.includes(incomeMsg)) {
        let indexOfMsg = message.indexOf(incomeMsg);
        let removedMsg = message.splice(indexOfMsg, 1);
        message.push(removedMsg.toString());
      }
    } else if (command == "Spam") {
        let output = arr[i].slice(5);
        let incomeMsg = output.split(" ");
        for (let j = 0; j < incomeMsg.length; j++) {
            message.push(incomeMsg[j])
            
        }
        

    }
  }
  let finalMsg = message.splice(" ")
  for (let i = 0; i < finalMsg.length; i++) {
      
      console.log(finalMsg[i]);
      
  }
}
// chatLogger([
//   "Chat Hello",
//   "Chat darling",
//   "Edit darling Darling",
//   "Spam how are you",
//   "Delete Darling",
//   "end",
// ]);
// chatLogger(["Hello",
// "Delete John",
// "Pin Hi",
// "end"])
chatLogger(["Chat John",
"Spam Let's go to the zoo",
"Edit zoo cinema",
"Chat tonight",
"Pin John",
"end"])

// o	"Chat {message}"
// o	"Delete {message}"
// o	"Edit {message} {editedVersion}"
// o	"Pin {message}"
// o	"Spam {message1} {message2} {messageN}"

function sum(arr) {
  let i = 0;
  let chat = [];
  while (arr[i] !== "end") {
    const [command, ...message] = arr[i].split(" ");
    if (command === "Chat") {
      chat = [...chat, message[0]];
    }
    if (command === "Delete") {
      if (chat.includes(message[0])) {
        let indexOfChat = chat.indexOf(message[0]);
        chat.splice(indexOfChat, 1);
      }
    }
    if (command === "Edit") {
      if (chat.includes(message[0])) {
        let indexOfChat = chat.indexOf(message[0]);
        chat.splice(indexOfChat, 1, message[1]);
      }
    }
    if (command === "Pin") {
      if (chat.includes(message[0])) {
        let indexOfChat = chat.indexOf(message[0]);
        chat.splice(indexOfChat, 1);
        chat = [...chat, message[0]];
      }
    }
    if (command === "Spam") {
      chat = [...chat, ...message];
    }
    i++;
  }
  console.log(chat.join("\n"));
}