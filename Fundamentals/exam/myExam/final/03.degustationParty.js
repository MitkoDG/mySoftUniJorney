function degustationParty(input) {
  let liked = {};

  let dislike = 0;

  while (input[0] != "Stop") {
    let tokens = input.shift().split("-");
    if (tokens[0] == "Like") {
      if (!liked.hasOwnProperty(tokens[1])) {
        liked[tokens[1]] = [];
        liked[tokens[1]].push(tokens[2]);
      } else {
        if (!liked[tokens[1]].includes(tokens[2])) {
          liked[tokens[1]].push(tokens[2]);
        }
      }
    } else {
      if (liked.hasOwnProperty(tokens[1])) {
        if (liked[tokens[1]].includes(tokens[2])) {
            let name = tokens[1]
          let indexOf = liked[tokens[1]].indexOf(tokens[2]);
          console.log(`${tokens[1]} doesn't like the ${tokens[2]}.`);
          
          liked[name].splice(indexOf, 1);
          dislike++;
        } else {
          console.log(
            `${tokens[1]} doesn't have the ${tokens[2]} in his/her collection.`
          );
        }
      } else {
        console.log(`${tokens[1]} is not at the party.`);
      }
    }
  }
  //   let sortedMeals = Object.values(liked)
  //   console.log(sortedMeals);
  let sortedMeals = Object.keys(liked)
    .sort((a, b) => liked[b].dish - liked[a].dish || a.localeCompare(b))
    .forEach((el) => console.log(`${el}: ${liked[el].join(", ")} `));
  console.log(`Unliked meals: ${dislike}`);
}
// degustationParty(["Like-Krisi-shrimps","Like-Krisi-soup","Like-Penelope-dessert","Like-Misho-salad","Stop"]);

// console.log('----next----');

// degustationParty(["Like-Krisi-shrimps",
// "Dislike-Vili-carp",
// "Dislike-Krisi-salad",
// "Stop"])

degustationParty(["Like-Katy-fish", "Dislike-Katy-fish", "Stop"]);
