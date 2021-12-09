function oddTask(input) {
  let words = input.toLowerCase().split(" ");
  let map = new Map();

  for (let word of words) {
    let num = 0;
    if (map.has(word)) {
      num = map.get(word);
    }
    num++;
    map.set(word, num);
  }
  
  let entries = Array.from(map);
  let filteredElements = entries.filter((el) => {
    return el[1] % 2 !== 0;
  });
  let result = [];

  for (let word of filteredElements) {
    result.push(word[0]);
  }
  console.log(result.join(" "));
}
oddTask("Java C# Php PHP Java PhP 3 C# 3 1 5 C#");
oddTask('Cake IS SWEET is Soft CAKE sweet Food')
