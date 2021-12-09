function countTheWords(input) {

    let text = input[0];
    let wordcount = 0;

    for (let w = 1; w < text.length; w++) {
        if (text[0] === " ") {
            wordcount++
        }
    }
    if (wordcount > 10) {
        console.log(`The message is too long to be send! Has ${wordcount} words.`);
    } else {
        console.log(`The message was sent successfully!`);
    }
}
countTheWords(["This massage has ten words and you can send it!"]);