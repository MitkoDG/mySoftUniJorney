function bossTask(input) {
  let pattern = /\|([A-Z]{4,})\|:#([A-Za-z\s]+)#/g;
  let n = Number(input.shift());

  for (let i = 0; i < n; i++) {
    let text = input[i];
    let matches = pattern.exec(text);

    if (matches == null) {
      console.log("Access denied!");
    } else {
      console.log(`${matches[1]}, The ${matches[2]}`);
      console.log(`>> Strength: ${matches[1].length}`);
      console.log(`>> Armor: ${matches[2].length}`);
    }
  }
}

bossTask([
  "3",
  "|PETER|:#Lead architect#",
  "|GEORGE|:#High Overseer#",
  "|ALEX|:#Assistant Game Developer#",
]);

// console.log('---next---');

// bossTask(['3',
// '|STEFAN|:#H1gh Overseer#',
// '|IVAN|:#Master detective#',
// '|KARL|: #Marketing lead#'])
