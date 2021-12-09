function replace(text, word) {
    let censored = "*".repeat(word.length)

    let newText = text.replace(word, censored)
    while (newText.includes(word)) {
        newText = newText.replace(word, censored)
    }
    console.log(newText);
}
replace("This is town", 'town')