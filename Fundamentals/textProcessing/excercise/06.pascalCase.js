function pascal(text) {
  text = text.split("");
  let words = [];
  // let word = "";
  text.forEach((el) => {
    if (el.charCodeAt(0) >= 65 && el.charCodeAt(0) < 90) {
      words.push(el);
    } else if (el.charCodeAt(0) >= 97 && el.charCodeAt(0) <= 122) {
      words[words.length - 1] += el;
    }
  });

  console.log(words.join(", "));
  // let textL = text.length;
  // for (let i = 0; i < textL; i ++) {
  //   let char = text[i]
  //   if (char == char.toUpperCase()) {
  //     if (text.indexOf(char) !== 0) {
  //       words.push(word);
  //       word = "";
  //       word += char;
  //     } else {
  //       word += char;
  //     }
  //   } else {
  //     word += char;
  //     if (i === textL - 1) {
  //       words.push(word);
  //     }
  //   }
  // }

  // console.log(words.join(", "));
}
pascal("SplitMeIfYouCanHaHaYouCantOrYouCan");
