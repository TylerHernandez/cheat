
  let element = document.querySelector("#selected_cards");

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

cards=[1,2,3,4,5,6,7,8,9,10];
console.log(cards);
shuffle(cards);
console.log(cards);

function selectcards(array){

//e.g. cards selected are [#32, #3, #18]

//user: select your cards to put down:
//you have : red ace (index #2), black queen(index #49), etc)
//their index locations will be how we put down their cards
//here the user will selectcards
//userinput= (selected cards in an array)





}


function putdowncards(selectedcards){

for(let i=0; i<selectedcards.length; i++){
  trashpile.push(selectedcards[i]);
}


}

let trashpile=[];
let selectedcards=[1,2,3];

console.log(trashpile);
putdowncards(selectedcards);
console.log(trashpile);
