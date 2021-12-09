function plantTask(input) {
  // parse first part of input, creating initial plant catalog
  // - determine how many elements of the input represent the catalog
  // - for each element of the input, create new catalog entry ot update existing entry

  let actions = {
      'Rate': rate,
      'Update': update,
      'Reset': reset
  }
  let catalog = {}

  let n = Number(input.shift())

  for (let i = 0; i < n; i++) {
      let [name, rarity] = input.shift().split("<->")

      catalog[name] = {
          rarity: Number(rarity),
          ratings: [],
          avgRating: 0

      }
      
  }
  // parse second part of input, updating the catalog, according to commands
  // - for each remaining input element, until "Exhibition"
  // -- parse input, to determine command
  // -- perform the given command with given parameters

  while (input[0] != 'Exhibition') {
      let [command, params] = input.shift().split(": ")
      let action = actions[command]
      action(params)
  }
  // sort catalog
  // - convert catalog to array
  // - pass compare funtion into sorting operation
  // -- return difference between plants rarity
  // -- if rarity is the same, return difference between plants avg rating
  let sorted = Object.entries(catalog).sort(comparePlants)

  // print result
  // - print static line
  // - for each plant of the sorted array, print stats
  console.log('Plants for the exhibition:');
  for (let [name, plant] of sorted) {
      console.log(`- ${name}; Rarity: ${plant.rarity}; Rating: ${plant.avgRating.toFixed(2)}`);
  }
  function comparePlants(a,b) {
      let rarityA = a[1].rarity
      let rarityB = b[1].rarity

      let ratingA = a[1].avgRating
      let ratingB = b[1].avgRating

      return (rarityB - rarityA) || (ratingB - ratingA)
  }
  // Rate
  // - parse parameters to determine plant name and given rating
  // - if the plant exist in the catalog, add the given rating ( as number )
  function rate(line) {
    let [name, rating] = line.split(" - ")
    if (catalog[name] != undefined) {
        let plant = catalog[name]
        plant.ratings.push(Number(rating))

        let total = 0
        for (let rating of plant.ratings) {
            total += rating
        }
        plant.avgRating = total / plant.ratings.length
    }else {
        console.log('error');
    }
}
  // Update
  // - parse parameters to determine plant name and given rarity
  // - if the plant exist in the catalog, update its rarity ( as number )
  function update(line) {
    let [name, rarity] = line.split(" - ")
    if (catalog[name] != undefined) {
        let plant = catalog[name]
        plant.rarity = (Number(rarity))

        
        }else {
        console.log('error');
    }
}
  // Reset
  // - if the plant exist in the catalog, remove all ratings
    function reset(name) {
        if (catalog[name] != undefined) {
            let plant = catalog[name]
            plant.ratings.length = 0
            plant.avgRating = 0
            
            
        } else {
            console.log('error');
        }
    }
 
}
plantTask([
  "3",
  "Arnoldii<->4",
  "Woodii<->7",
  "Welwitschia<->2",
  "Rate: Woodii - 10",
  "Rate: Welwitschia - 7",
  "Rate: Arnoldii - 3",
  "Rate: Woodii - 5",
  "Update: Woodii - 5",
  "Reset: Arnoldii",
  "Exhibition",
]);

console.log("-----Mine-------");

// let plantNumber = Number(input.shift());
// let catalog = {};
// for (let i = 0; i < plantNumber; i++) {
//   let [name, rarity] = input.shift().split("<->");
//   catalog[name] = {
//     rarity: Number(rarity),
//     rating: [],
//   };
// }
// console.log(catalog);
// let line = input.shift();

//   while (line !== "Exhibition") {
//     line.split(":  ");
//     if (line[0] == "Rate") {
//         let [plant, number] = line[1].split(" - ")
//         plantsList[plant].push(number)
//     } else if (line[0] == "Update") {

//     } else if (line[0] == "Reset") {

//     } else {
//       console.log("error");
//     }

//     line = input.shift();
//   }

//   console.log(typeof plantNumber);