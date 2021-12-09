function solve(text) {
  let regEx = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;
  let matches = []
  let validMatch
  let matchResult = text.exec(regEx)
  
  console.log(matchResult);
  // while((validMatch = regEx.exec(text)) !==null){

  //   matches.push(validMatch[0])
  // }
  // console.log(matches.join(" "));
}
solve(
  "Ivan Ivanov,	ivan ivanov, Ivan ivanov, ivan Ivanov, IVan Ivanov, Ivan IvAnov, Ivan	Ivanov"
);
