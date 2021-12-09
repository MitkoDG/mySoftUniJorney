function ascii(first, second) {
  let firstSymbolAsNum = first.charCodeAt(0);
  let secondSymbolAsNum = second.charCodeAt(0);

  
  let smallerNumber = Math.min(firstSymbolAsNum, secondSymbolAsNum)
  let biggerNumber = Math.max(firstSymbolAsNum, secondSymbolAsNum)
  let result = [];

  for (let i = smallerNumber + 1; i < biggerNumber; i++) {
    let currentElement = String.fromCharCode(i);
    result.push(currentElement);
  }

  // let decimalCode = 'a'.charCodeAt(0);
  // let symbolRepresentation = String.fromCharCode(decimalCode);

  console.log(result.join(" "));
}
ascii("a", "d");
ascii("#", ":");
ascii("C", "#");
