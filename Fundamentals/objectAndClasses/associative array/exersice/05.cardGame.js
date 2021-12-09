function cardGame(arr) {
  let players = new Map();

  for (let player of arr) {
    let currentCards = player.split(": ");
    let currentName = currentCards.shift();
    currentCards = currentCards.toString().split(", ");

    if (players.has(currentName)) {
      currentCards.forEach((el) => players.get(currentName).add(el));
    } else {
      let cards = new Set();
      currentCards.forEach((el) => cards.add(el));
      players.set(currentName, cards);
    }
  }

  let playersEntries = Array.from(players.entries());
  let output = [];

  for (let player of playersEntries) {
    let currentCards = Array.from(player[1].keys());
    let currentArr;
    let sum = 0;

    for (let card of currentCards) {
      let currentCard = card.split("");
      let firstNum = 0;
      let secondNum = 0;
      currentArr = [];

      if (currentCard.length > 2) {
        firstNum = 10;
      } else if (currentCard[0] > "0" && currentCard[0] <= "9") {
        firstNum = Number(currentCard[0]);
      } else {
        switch (currentCard[0]) {
          case "J":
            firstNum = 11;
            break;
          case "Q":
            firstNum = 12;
            break;
          case "K":
            firstNum = 13;
            break;
          case "A":
            firstNum = 14;
            break;
        }
      }

      switch (currentCard[currentCard.length - 1]) {
        case "S":
          secondNum = 4;
          break;
        case "H":
          secondNum = 3;
          break;
        case "D":
          secondNum = 2;
          break;
        case "C":
          secondNum = 1;
          break;
      }

      sum += firstNum * secondNum;
    }
    currentArr.push(player[0]);
    currentArr.push(sum);

    output.push(currentArr);
  }

  output.forEach((el) => console.log(`${el[0]}: ${el[1]}`));
}
cardGame([
  "Peter: 2C, 4H, 9H, AS, QS",
  "Tomas: 3H, 10S, JC, KD, 5S, 10S",
  "Andrea: QH, QC, QS, QD",
  "Tomas: 6H, 7S, KC, KD, 5S, 10C",
  "Andrea: QH, QC, JS, JD, JC",
  "Peter: JD, JD, JD, JD, JD, JD",
]);

function solve(arr) {
    const type = {'2': 2, '3': 3, '4': 4, '5': 5, '6': 6, '7': 7, '8': 8, '9': 9, '10': 10, 'J': 11, 'Q': 12, 'K': 13, 'A': 14 };
    const power = { 'S': 4, 'H': 3, 'D': 2, 'C': 1 };
    const obj = {};
    arr.forEach((item) => {
      const [name, cards] = item.split(": ");
      const card = cards.split(", ");
      if (obj.hasOwnProperty(name)) {
        const currentDeck = obj[name];
        const uniqueValues = Array.from(new Set(card));
        const combined = [...currentDeck, ...uniqueValues];
        obj[name] = Array.from(new Set(combined));
      } else {
        obj[name] = [...new Set(card)];
      }
    });
    const values = Object.entries(obj);
    const sum = values.map(([name, value]) => {
      let sums = value.reduce((prev, curr) => {
        const currType = curr.split("").splice(-1, 1).join("");
        const currPower = curr.slice(0, -1);
        let sum = type[currPower] * power[currType];
        return prev + sum
      }, 0);
      return console.log(`${name}: ${sums}`);
    });
  }
  solve([
    "John: 2C, 4H, 9H, AS, QS",
    "Slav: 3H, 10S, JC, KD, 5S, 10S",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Slav: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "Alex: 6H, 7S, KC, KD, 5S, 10C",
    "Thomas: QH, QC, JS, JD, JC",
    "John: JD, JD, JD, JD",
  ]);

  function drawCards(arr) {
    let players = {};

    let player = '';
    let hand = '';

    let n1 = 0;
    let n2 = 0;

    for (let item of arr) {
        [player, hand] = item.split(': ');
        
        if (!players.hasOwnProperty(player)) {
            players[player] = {
                cards: [],
                score: 0,
            }
        }

        hand = hand.split(', ');
        
        for (let card of hand) {
            if (card.startsWith('J')) {
                n1 = 11;
            } else if (card.startsWith('Q')) {
                n1 = 12;
            } else if (card.startsWith('K')) {
                n1 = 13;
            } else if (card.startsWith('A')) {
                n1 = 14;
            } else {
                n1 = Number(card.replace(card[card.length - 1], '')); // catches 10 and 11 too
            }

            if (card.endsWith('S')) {
                n2 = 4;
            } else if (card.endsWith('H')) {
                n2 = 3;
            } else if (card.endsWith('D')) {
                n2 = 2;
            } else if (card.endsWith('C')) {
                n2 = 1;
            }

            if (!players[player].cards.includes(card)) {
                players[player].cards.push(card);
                players[player].score += n1 * n2;
            }
        }
    }

    for (let item in players) {
        console.log(`${item}: ${players[item].score}`);
    }
}