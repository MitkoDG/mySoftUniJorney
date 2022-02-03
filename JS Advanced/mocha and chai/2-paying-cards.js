// function cardFactory(face, suit) {
//     const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
//     const suits = {
//         S: '♠',
//         H: '♥',
//         D: '♦',
//         C: '♣',
//     };
    
//     if (!(faces.includes(face) && suits[suit])) {
//         throw new Error('Invalid face or suit');
//     }

//     if (face != face.toUpperCase()) {
        
//     }

//     let card = {
//         face,
//         suit,
//         toString() {
//             console.log(this.face + suits[this.suit]);
//         }
//     };

//     return card;
// }

// let card = cardFactory('A', 'S');
// card.toString()

function printDeckOfCards(cards) {
    function createCard(face, suit) {
        const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

        const suits = {
            'S': '\u2660',
            'H': '\u2665',
            'D': '\u2666',
            'C': '\u2663',
        };

        if (!faces.includes(face) || !suits.hasOwnProperty(suit)) {
            return 'invalid';
        }

        return {
            face,
            suit: suits[suit],
            toString() {
                return this.face + this.suit;
            }
        }
    }

    const generatedCards = cards.map(item => {
        const suit = item[item.length - 1];
        const face = item.slice(0, item.length - 1);

        return createCard(face, suit).toString();
    });

    if (generatedCards.includes('invalid')) {
        const index = generatedCards.indexOf('invalid');
        console.log('Invalid card: ' + cards[index]);
    } else {
        console.log(generatedCards.join(' '));
    }
}