function countTheWords(input) {
    let text = input[0];
    let counter = 1;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === " ") {
            counter++;
        }
    }
    if (counter > 10) {
        console.log(`The message is too long to be send! Has ${counter} words.`);
    } else {
        console.log("The message was sent successfully!");
    }
}
countTheWords(["This massage has ten words and you can send it!"]);