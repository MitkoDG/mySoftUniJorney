// function imitation(arr) {
//   let message = arr.shift();
//   let line = arr.shift();

//   while (line !== 'Decode') {
//       let tokens = line.split('|')
//       let command = tokens[0];
//       switch (command) {
//           case 'Move':
//             let index = Number(tokens[1]);
//               message.substring()
//               break;

//               case 'Move':
              
//               break;
      
//           default:
//               break;
//       }

//   }
// }
// imitation(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);

//   •	"Move {number of letters}":
// o	Moves the first n letters to the back of the string
// •	"Insert {index} {value}":
// o	Inserts the given value before the given index in the string
// •	"ChangeAll {substring} {replacement}":
// o	Changes all occurrences of the given substring with the replacement text

function theImitationGame(input) {
    let message = input.shift();

    let line = input.shift();

    while (line != "Decode") {
        let tokens = line.split("|");

        let command = tokens[0];

        switch (command) {
            case "Move": {
                let index = Number(tokens[1]);

                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);

                message = secondPart + firstPart;

                break;
            }
            case "Insert": {
                let index = Number(tokens[1]);

                let firstPart = message.substring(0, index);
                let secondPart = message.substring(index);
                let value = tokens[2];

                message = firstPart + value + secondPart;

                break;
            }
            case "ChangeAll": {
                let subString = tokens[1];
                let replacement = tokens[2];

                message = message.split(subString).join(replacement);

                break;
            }
        }

        line = input.shift();
   }

   console.log(`The decrypted message is: ${message}`);
}
theImitationGame(["zzHe", "ChangeAll|z|l", "Insert|2|o", "Move|3", "Decode"]);
