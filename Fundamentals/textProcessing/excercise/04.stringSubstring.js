function string(word, text) {
    let sentence = text.toLowerCase()
    let wordToLower = word.toLowerCase()
    sentenceAsArray = sentence.split(" ")
    if (sentenceAsArray.includes(wordToLower)) {
        console.log(wordToLower);
    } else {
        console.log(`${wordToLower} not found!`);
    }
}
string('javascript',
'JavaScript is the best programming language'
)