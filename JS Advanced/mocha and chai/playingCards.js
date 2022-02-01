function cardFactory(face, suit) {
  let faces = [];
  let suits = {
    S: "\u2660",
    H: "\u2665",
    D: "\u2666",
    C: "\u2663",
  };

  if (!faces.includes(face) || !suits[suit]) {
    throw new Error("Invalid face or suit");
  }

  if (face != face.toUpperCase()) {
    throw new Error('error');
  }

  let card = {
    face,
    suit,
    toString() {
      console.log(this.face + this.suit);
    },
  };
  return card;
}

let card = cardFactory("A", "S");
card.toString();
