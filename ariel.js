class Card{
  constructor(type, number){
    this.type = type;
    this.number = number;
  }
}

function cardPicker() {
  let cardForPlay = Math.floor(Math.random()*cardNums.length)
  console.log(cardForPlay)
}

Joke1 = Card("Joker", 1)
One1 = Card("One", 1)
Joke2 = Card("Joker", 2)
One2 = Card("One", 2)

let cards = [Joke1, One1, Joke2, One2];
let cardNums = [0,1,2,3];
