function modernTask(text) {
  let result = [];
  for (let element of text.split(" ")) {
    if (element[0] === "#" && element.length !== 1) {
      result.push(element.substring(1));
    }
  }
  let final = [];

  for (let el of result) {
    let array = el.split("");
    let arrL = array.length;
    let flag = true;
    for (let i = 0; i < arrL; i++) {
      let currentCode = array[i].charCodeAt(0);
      if (
        (currentCode < 97 || currentCode > 122) &&
        (currentCode < 65 || currentCode > 90)
      ) {
        flag = false;
      }
    }
    if (flag) {
      final.push(el);
    }
  }
  console.log(final.join("\n"));

  // result.forEach(el=>console.log((el)))
}
modernTask("Nowadays everyone uses # to tag a #special word in #socialMedia");

// function solve(string) {
//     let array = string.split(' ');
  
//     for (let word of array) {
//       if (word.startsWith('#') && word.length > 1 && checkForDigit(word)) {
//         console.log(word.substr(1));
//       }
//     }
  
//     function checkForDigit(word) {
//       let isWord = true;
//       for (let ch of word) {
//         if (!isNaN(ch)) {
//           return false;
//         }
//       }
//       if (isWord) {
//         return true;
//       }
//     }
//   }
