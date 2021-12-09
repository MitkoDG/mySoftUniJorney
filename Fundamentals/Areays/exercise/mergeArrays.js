function arraysIntro(firstArr, secondArr) {
  let firstArray = firstArr;
  let secondArray = secondArr;
  let firstL = firstArray.length;
  let resultArray = [];

  for (let i = 0; i < firstL; i++) {
    let resultArrElement;
    if (i % 2 === 0) {
      resultArrElement = Number(firstArray[i]) + Number(secondArray[i]);
    } else {
      resultArrElement = firstArray[i] + secondArray[i];
    }
    resultArray.push(resultArrElement);
  }
  console.log(resultArray.join(" - "));
}
arraysIntro(["5", "15", "23", "56", "35"], ["17", "22", "87", "36", "11"]);
arraysIntro(["13", "12312", "5", "77", "4"], ["22", "333", "5", "122", "44"]);

