function words(input) {
    let words = new Map()

    for (let word of input) {
        if (words.has(word)) {
           let currentCount = words.get(word)
           words.set(word, currentCount + 1)
        } else {
            words.set(word, 1)
        }
    }
    let sortedWords = Array.from(words.entries())
    sortedWords.sort((a,b) => b[1] - a[1])

    for (let wordEntry of sortedWords) {
console.log(`${wordEntry[0]} -> ${wordEntry[1]} times`);
    }
}
words(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])