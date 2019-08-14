
let trashpile=[];
let selectedCards=[];
let myDeck = [];
class Card{
  constructor(type, numValue){
    this.type = type;
    this.numValue = numValue;
  }
}

class Player1{
  constructor(name){
    this.name = name;
    this.cards = [];
    for(let i = 0; i < 13;i++){
      this.cards.push(cardDeck.cardDeck[i]);
    }
  }
}

class Player2{
  constructor(name){
    this.name = name;
    this.cards = [];
    for(let i = 13; i < 26;i++){
      this.cards.push(cardDeck.cardDeck[i]);
    }
  }
}

class Player3{
  constructor(name){
    this.name = name;
    this.cards = [];
    for(let i = 26; i < 39;i++){
      this.cards.push(cardDeck.cardDeck[i]);
    }
  }
}

class Player4{
  constructor(name){
    this.name = name;
    this.cards = [];
    for(let i = 39; i < 52;i++){
      this.cards.push(cardDeck.cardDeck[i]);
    }

  }
}

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

class CardDeck{
  constructor(){
    this.cardDeck = []
    let Ace1 = new Card("Ace", 1);
    this.cardDeck.push(Ace1);
    let Ace2 = new Card("Ace", 1);
    this.cardDeck.push(Ace2);
    let Ace3 = new Card("Ace", 1);
    this.cardDeck.push(Ace3);
    let Ace4 = new Card("Ace", 1);
    this.cardDeck.push(Ace4);
    let Two1 = new Card("Two", 2);
    this.cardDeck.push(Two1);
    let Two2 = new Card("Two", 2);
    this.cardDeck.push(Two2);
    let Two3 = new Card("Two", 2);
    this.cardDeck.push(Two3);
    let Two4 = new Card("Two", 2);
    this.cardDeck.push(Two4);
    let Three1 = new Card("Three", 3);
    this.cardDeck.push(Three1);
    let Three2 = new Card("Three", 3);
    this.cardDeck.push(Three2);
    let Three3 = new Card("Three", 3);
    this.cardDeck.push(Three3);
    let Three4 = new Card("Three", 3);
    this.cardDeck.push(Three4);
    let Four1 = new Card("Four", 4);
    this.cardDeck.push(Four1);
    let Four2 = new Card("Four", 4);
    this.cardDeck.push(Four2);
    let Four3 = new Card("Four", 4);
    this.cardDeck.push(Four3);
    let Four4 = new Card("Four", 4);
    this.cardDeck.push(Four4);
    let Five1 = new Card("Five", 5);
    this.cardDeck.push(Five1);
    let Five2 = new Card("Five", 5);
    this.cardDeck.push(Five2);
    let Five3 = new Card("Five", 5);
    this.cardDeck.push(Five3);
    let Five4 = new Card("Five", 5);
    this.cardDeck.push(Five4);
    let Six1 = new Card("Six", 6);
    this.cardDeck.push(Six1);
    let Six2 = new Card("Six", 6);
    this.cardDeck.push(Six2);
    let Six3 = new Card("Six", 6);
    this.cardDeck.push(Six3);
    let Six4 = new Card("Six", 6);
    this.cardDeck.push(Six4);
    let Seven1 = new Card("Seven", 7);
    this.cardDeck.push(Seven1);
    let Seven2 = new Card("Seven", 7);
    this.cardDeck.push(Seven2);
    let Seven3 = new Card("Seven", 7);
    this.cardDeck.push(Seven3);
    let Seven4 = new Card("Seven", 7);
    this.cardDeck.push(Seven4);
    let Eight1 = new Card("Eight", 8);
    this.cardDeck.push(Eight1);
    let Eight2 = new Card("Eight", 8);
    this.cardDeck.push(Eight2);
    let Eight3 = new Card("Eight", 8);
    this.cardDeck.push(Eight3);
    let Eight4 = new Card("Eight", 8);
    this.cardDeck.push(Eight4);
    let Nine1 = new Card("Nine", 9);
    this.cardDeck.push(Nine1);
    let Nine2 = new Card("Nine", 9);
    this.cardDeck.push(Nine2);
    let Nine3 = new Card("Nine", 9);
    this.cardDeck.push(Nine3);
    let Nine4 = new Card("Nine", 9);
    this.cardDeck.push(Nine4);
    let Ten1 = new Card("Ten", 10);
    this.cardDeck.push(Ten1);
    let Ten2 = new Card("Ten", 10);
    this.cardDeck.push(Ten2);
    let Ten3 = new Card("Ten", 10);
    this.cardDeck.push(Ten3);
    let Ten4 = new Card("Ten", 10);
    this.cardDeck.push(Ten4);
    let Jack1 = new Card("Jack", 11);
    this.cardDeck.push(Jack1);
    let Jack2 = new Card("Jack", 11);
    this.cardDeck.push(Jack2);
    let Jack3 = new Card("Jack", 11);
    this.cardDeck.push(Jack3);
    let Jack4 = new Card("Jack", 11);
    this.cardDeck.push(Jack4);
    let Queen1 = new Card("Queen", 12);
    this.cardDeck.push(Queen1);
    let Queen2 = new Card("Queen", 12);
    this.cardDeck.push(Queen2);
    let Queen3 = new Card("Queen", 12);
    this.cardDeck.push(Queen3);
    let Queen4 = new Card("Queen", 12);
    this.cardDeck.push(Queen4);
    let King1 = new Card("King", 13);
    this.cardDeck.push(King1);
    let King2 = new Card("King", 13);
    this.cardDeck.push(King2);
    let King3 = new Card("King", 13);
    this.cardDeck.push(King3);
    let King4 = new Card("King", 13);
    this.cardDeck.push(King4);
    shuffle(this.cardDeck);
  }
}

cardDeck = new CardDeck();
P1 = new Player1("Ariel");
console.log(P1.cards);
P2 = new Player2("Ty");
console.log(P2.cards);
P3 = new Player2("Jayden");
console.log(P3.cards);
P4 = new Player2("Aramis");
console.log(P4.cards);

function selectcards(array){

//e.g. cards selected are [#32, #3, #18]



//user: select your cards to put down:
//you have : red ace (index #2), black queen(index #49), etc)
//their index locations will be how we put down their cards
//here the user will selectcards
//userinput= (selected cards in an array)

  var size = 4; //Maximum Array size
  for(var i=0; i<size; i++) {
  	//Taking Input from user
  	selectedCards[i] = prompt('Select your cards to put down ' + (i+1));
  }

}


function putdowncards(){
  for(let i=0; i<selectedCards.length; i++){
    trashpile.push(selectedCards[i]);
  }
}

function caughtLying(player){
  for(let i=0; i<trashpile.length; i++)
  {
    player.deck.push(trashpile[i]);
    trashpile.shift();
  }
  console.log(player.deck)
}


// for(let x  = 0; x < 13; x++){
//   myDeck.push(P1.cards[x].type + " " + P1.cards[x].numValue)
// }
// console.log(myDeck);
selectcards(P1.cards);
putdowncards();

console.log(trashpile);
