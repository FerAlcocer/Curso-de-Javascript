//
//  2C = Two of Clubs
//  2D = Two of Diamonds
//  2H = Two of Hearts
//  2S = Two of Spades


let deck = [];

const tipos = ['C', 'D', 'H', 'S'];
const especiales = ['A', 'J', 'K', 'Q'];

const crearDeck = () =>{
for( let i = 2; i <=10; i++){
    for(let tipo of tipos){
        deck.push(i + tipo);
    }
}

// deck =[];
// for( let tipo of tipos){
//     for(let i = 2; i < 10; i++){
//         deck.push(i + tipo);
//     }
// }
// console.log(deck);

for(let tipo of tipos){
    for( let especial of especiales){
    deck.push(especial + tipo);
    }
}
console.log(deck);

// deck = _.shuffle(deck);

return deck;
}

crearDeck();