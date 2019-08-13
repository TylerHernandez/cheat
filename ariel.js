class Card{
  constructor(type, number){
    this.type = type;
    this.number = number;
  }
}

function cardPicker() {
  let cardForPlay = Math.floor(Math.random()*cardNums.length)
  console.log(cardForPlay);
  let cardPicked = cards[cardForPlay];
  cards.splice(cardForPlay);
  cardNums.splice(cardForPlay);
  return cardPicked;
}

Joke1 = new Card("Joker", 1)
One1 = new Card("One", 1)
Joke2 = new Card("Joker", 2)
One2 = new Card("One", 2)

let cards = [Joke1, One1, Joke2, One2];
let cardNums = [0,1,2,3];
console.log(cardPicker());
console.log(cards);
console.log(cardNums);
