function pianistTask(input) {
  let songsN = +input.shift();
  let songList = {};
  for (let i = 0; i < songsN; i++) {
    let [name, composer, key] = input.shift().split("|");
    if (!songList.hasOwnProperty(name)) {
      songList[name] = {
        composer,
        key,
      };
    }
  }

  while (input[0] != "Stop") {
    let tokens = input.shift().split("|");
    let command = tokens[0];
    let name = tokens[1];

    if (command == "Add") {
      if (songList[name] != undefined) {
        console.log(`${name} is already in the collection!`);
      } else {
        songList[name] = {
          composer: tokens[2],
          key: tokens[3],
        };
        console.log(
          `${name} by ${tokens[2]} in ${tokens[3]} added to the collection!`
        );
      }
    } else if (command == "Remove") {
      if (songList[name] == undefined) {
        // songList.hasOwnProperty(name) == false
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        delete songList[name];
        console.log(`Successfully removed ${name}!`);
      }
    } else if (command == "ChangeKey") {
      if (songList[name] == undefined) {
        console.log(
          `Invalid operation! ${name} does not exist in the collection.`
        );
      } else {
        songList[name].key = tokens[2];
        console.log(`Changed the key of ${name} to ${tokens[2]}!`);
      }
    }
  }
  // sort songList
  // - convert object into array
  // - sort array based on lexicographical order of piece name and then composer name
  let sorted = Object.entries(songList).sort((a,b)=>{
    let nameA = a[0]
    let nameB = b[0]

    let composerA= a[1].composer
    let composerB = b[1].composer


    return nameA.localeCompare(nameB) || composerA.localeCompare(composerB)
  });

  for (let [name, piece] of sorted) {
      console.log(`${name} -> Composer: ${piece.composer}, Key: ${piece.key}`);
  }
}
pianistTask([
  "3",
  "Fur Elise|Beethoven|A Minor",
  "Moonlight Sonata|Beethoven|C# Minor",
  "Clair de Lune|Debussy|C# Minor",
  "Add|Sonata No.2|Chopin|B Minor",
  "Add|Hungarian Rhapsody No.2|Liszt|C# Minor",
  "Add|Fur Elise|Beethoven|C# Minor",
  "Remove|Clair de Lune",
  "ChangeKey|Moonlight Sonata|C# Major",
  "Stop",
]);

console.log("------------------- next result");
// with arays
function solve(input) {
    let piecesNum = Number(input.shift());
    let pieceArr = [];
    for (let i = 0; i < piecesNum; i++) {
        let line = input.shift();
        let [piece, composer, key] = line.split('|')
        pieceArr.push([piece, composer, key]);
    }

    for (entry of input) {
        let line = entry.split("|");
        let command = line[0];
        if (command === 'Add') {
            let piece = line[1];
            let composer = line[2];
            let key = line[3];
            let unique = true;
            for (let j = 0; j < pieceArr.length; j++) {
                let currentArr = pieceArr[j];
                if (currentArr.includes(piece)) {
                    console.log(`${piece} is already in the collection!`);
                    unique = false;
                }
            }
            if (unique) {
                pieceArr.push([piece, composer, key]);
                console.log(`${piece} by ${composer} in ${key} added to the collection!`)
            }
        } else if (command === 'Remove') {
            let piece = line[1];
            let exists = false;
            let index = 0;
            for (arr of pieceArr) {
                if (arr.includes(piece)) {
                    exists = true;
                    index = pieceArr.indexOf(arr);
                }
            }
            if (exists) {
                pieceArr.splice(index, 1);
                console.log(`Successfully removed ${piece}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }
        } else if (command === 'ChangeKey') {
            let piece = line[1];
            let key = line[2];
            let index = 0;
            let exists = false;
            for (arr of pieceArr) {
                if (arr.includes(piece)) {
                    exists = true;
                    index = pieceArr.indexOf(arr);
                }
            }
            if (exists) {
                pieceArr[index].splice(2, 1, key);
                console.log(`Changed the key of ${piece} to ${key}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`)
            }

        } else if (command==='Stop'){
        let sortedArr=pieceArr.sort((a, b)=>{
        return a[0][0].localeCompare(b[0][0]) || 
         a[0][1].localeCompare([b[0][1]])     
        }) 
        
        for (piece of sortedArr) {
        console.log(`${piece[0]} -> Composer: ${piece[1]}, Key: ${piece[2]}`)    
        }
            
        }

    }
    
}

// alternative
function solve(input) {

    let num = +input.shift();
    let allPieces = {}
    while (num > 0) {
        let [piece, composer, key] = input.shift().split("|");
        allPieces[piece] = { composer, key };
        num--;
    }
    let commandParser = {
        "Add": (allPieces, piece, composer, key) => {
            if (!allPieces[piece]) {
                allPieces[piece] = { composer, key };
                console.log(`${piece} by ${composer} in ${key} added to the collection!`);
            } else {
                console.log(`${piece} is already in the collection!`);
            }
            return allPieces;
        },
        "Remove": (allPieces, piece) => {
            allPieces[piece]
                ? delete allPieces[piece] && console.log(`Successfully removed ${piece}!`)
                : console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            return allPieces;
        },
        "ChangeKey": (allPieces, piece, newKey) => {
            if (allPieces[piece]) {
                allPieces[piece].key = newKey;
                console.log(`Changed the key of ${piece} to ${newKey}!`);
            } else {
                console.log(`Invalid operation! ${piece} does not exist in the collection.`);
            }
            return allPieces;
        }
    }
    input.forEach((line) => {
        if (line !== "Stop") {
            let [command, ...rest] = line.split("|");
            allPieces = commandParser[command](allPieces, ...rest);
        }
    })
    let sortedKeys = Object.keys(allPieces).sort((a, b) => a.localeCompare(b)
        || allPieces[a].composer.localeCompare(allPieces[b].composer))
        .forEach((el) => console.log(`${el} -> Composer: ${allPieces[el].composer}, Key: ${allPieces[el].key} `));
}
solve([
    '3',
    'Fur Elise|Beethoven|A Minor',
    'Moonlight Sonata|Beethoven|C# Minor',
    'Clair de Lune|Debussy|C# Minor',
    'Add|Sonata No.2|Chopin|B Minor',
    'Add|Hungarian Rhapsody No.2|Liszt|C# Minor',
    'Add|Fur Elise|Beethoven|C# Minor',
    'Remove|Clair de Lune',
    'ChangeKey|Moonlight Sonata|C# Major',
    'Stop'
]
)