// function astraProblem(input) {
//     let pattern = /(\#|\|)(?<name>[A-Za-z\s?]+)\1(?<year>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,10000})\1/g

//     // let matches = input.match(pattern)

//     // let matchResult = []
//     // for (let m of matches) {
//     //     matchResult.push(m)
//     // }
//     // console.log(matchResult);

//     let validName = null
//     let validNames = []
//     let totalCalories = 0
//     let daysCounter = 0

//     while((validName = pattern.exec(input)) !==null) {
//         daysCounter++
//         let valid = []
//         valid.push(validName.groups.name, validName.groups.year, validName.groups.calories)
//         validNames.push(valid)
//     }
//     console.log(validNames);
//     let days = totalCalories / 2000
//     console.log(`You have food to last you for: ${Math.floor(days)} days!`);
//     for (let nextProduct of validNames) {
//         // let symbol = nextProduct[0]
//         // console.log(symbol);
//         let [itemName, expDate, calory] = nextProduct.split(",")

//         console.log(`Item: ${itemName}, Best before: ${expDate}, Nutrition: ${calory}`);
//     }
// }
// astraProblem('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')

function solve(text) {
  let pattern =
    /(\#|\|)(?<name>[A-Za-z\s?]+)\1(?<year>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,10000})\1/g;
  let total = 0;
  let result = [];
  let match = pattern.exec(text);

  while (match !== null) {
    let name = match[2];
    let date = match[3];
    let calories = Number(match[4]);
    total += calories;
    result.push(`Item: ${name}, Best before: ${date}, Nutrition: ${calories}`);
    match = pattern.exec(text);
  }

  let days = Math.floor(total / 2000)
  console.log(`You have food to last you for: ${days} days!`);
  for (const line of result) {
      console.log(line);
  }

}
solve('#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|')