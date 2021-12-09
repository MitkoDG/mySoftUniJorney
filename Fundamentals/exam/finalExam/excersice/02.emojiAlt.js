function emoji(input) {
  let text = input[0];

  let smilyRegEx = /(\:\:|\*\*)([A-Z][a-z][a-z]+)\1/g;
  let digitRegEx = /\d/g;

  let digits = text.match(digitRegEx);
  let treshold = 1;
  digits.map(d => treshold *= Number(d)); // works with .forEach as well
  console.log(`Cool threshold: ${treshold}`);

  let validMatch = "";
  //alternative let validMatch = smilyRegEx.exec(text)
  let emojis = [];

  while (validMatch = smilyRegEx.exec(text)) {
    emojis.push(validMatch);
    // validMatch = smilyRegEx.exec(text) alternative
  }

  console.log(`${emojis.length} emojis found in the text. The cool ones are:`);

  for (let emojiMatch of emojis) {
    let emojiText = emojiMatch[2];
    let fullEmoji = emojiMatch[0];
    let coolness = 0;
    for (let letter of emojiText) {
      coolness += letter.charCodeAt();
    }
    if (coolness > treshold) {
      console.log(fullEmoji);
    }
  }
}
emoji([
  "In the Sofia Zoo there are 311 animals in total! ::Smiley:: This includes 3 **Tigers**, 1 ::Elephant:, 12 **Monk3ys**, a **Gorilla::, 5 ::fox:es: and 21 different types of :Snak::Es::. ::Mooning:: **Shy**",
]);
