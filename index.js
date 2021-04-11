// Code your solutions in this file
let gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
  for (let i = 0; i < gifts.length; i++) {
    console.log(`Wrapped ${gifts[i]} and added a bow!`);
  }

  return gifts;
}

wrapGifts(gifts);

let cards = ['Lisa', 'Kaitlin', 'Jan'];
var typeOfCard = 'surprise';

function writeCards(cards,typeOfCard) {
    let final = [];
    for (let i = 0; i < cards.length; i++) {
        final.push (`Thank you, ${[cards[i]]}, for the wonderful ${typeOfCard} gift!`);
        
        
    }
return final;
}
console.log(writeCards);


function countDown() {
   let countDown = 10;
   while (countDown >= 0) {
       console.log(countDown--);
   }
    
}