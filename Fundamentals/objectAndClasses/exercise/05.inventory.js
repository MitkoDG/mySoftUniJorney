function inventoryTask(input) {
  let heroes = [];

  for (let heroInfo of input) {
    let [name, level, items] = heroInfo.split(" / ");

    // items
    //   .split(", ")
    //   .sort((a, b) => a.localeCompare(b))
    //   .join(", ");

    let splited = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let hero = {
      name: name,
      level: +level,
      items: splited,
    };
    heroes.push(hero);
  }

  let sortedHeroesByLevel = heroes.sort((a, b) => a.level - b.level);
  sortedHeroesByLevel.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
inventoryTask([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
// alternative
function solve(heroList) {
  let heroes = [];

  for (let heroString of heroList) {
    let tokens = heroString.split(" / ");
    let name = tokens[0];
    let level = Number(tokens[1]);
    let items = tokens[2].split(", ");

    let heroData = {
      name,
      level,
      items,
    };

    heroes.push(heroData);
  }

  let sortedHeroes = heroes.sort((a, b) => {
    return a.level - b.level;
  });

  for (let hero of sortedHeroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(
      `items => ${hero.items.sort((a, b) => a.localeCompare(b)).join(", ")}`
    );
  }
}

//alternative
function solve(input) {
  let heroes = [];
  for (heroInfo of input) {
    let [name, level, items] = heroInfo.split(" / ");
    items = items
      .split(", ")
      .sort((a, b) => a.localeCompare(b))
      .join(", ");
    let hero = {
      name: name,
      level: +level,
      items: items,
    };
    heroes.push(hero);
  }
  let sortedHeresByLevel = heroes.sort((a, b) => a.level - b.level);
  sortedHeresByLevel.forEach((hero) => {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  });
}
// solve([
//   "Isacc / 25 / Apple, GravityGun",
//   "Derek / 12 / BarrelVest, DestructionSword",
//   "Hes / 1 / Desolator, Sentinel, Antara",
// ]);
