function gameTask(input) {
    let encryptedMsg = input.shift()

    while (input[0] !== 'Decode') {
        let tokens = input.shift().split("|")
        let command = tokens[0]

        if (command == 'Insert') {
            let index = Number(tokens[1])
            let leftPart = encryptedMsg.substring(0, index)
            let rigthPart = encryptedMsg.substring(index)
            encryptedMsg = leftPart + tokens[2] + rigthPart
        } else if (command == 'Move') {
            let lToMove = Number(tokens[1])
            let lettersToMove = encryptedMsg.substring(0, lToMove)
            let restToSwap = encryptedMsg.substring(lToMove)
            encryptedMsg = restToSwap + lettersToMove
        } else if (command == 'ChangeAll') {
            encryptedMsg = encryptedMsg.split(tokens[1]).join(tokens[2])
        }
    }
    console.log(`The decrypted message is: ${encryptedMsg}`);
    /*•	"Move {number of letters}":
o	Moves the first n letters to the back of the string
•	"Insert {index} {value}":
o	Inserts the given value before the given index in the string
•	"ChangeAll {substring} {replacement}":
o	Changes all occurrences of the given substring with the replacement text
*/
}
gameTask([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'])