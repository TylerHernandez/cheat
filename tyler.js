


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

//
// let element = document.querySelector("#selected_cards");
//
// for(let i=0; i<element.length; i++){
//   selectedcards.push(element[i]);
//   console.log(element[i]);
//
// }
var size = 4; //Maximum Array size
for(var i=0; i<size; i++) {
	//Taking Input from user
	selectedCards[i] = prompt('Enter Element ' + (i+1));
}
console.log(selectedCards);

}


function putdowncards(){

for(let i=0; i<selectedCards.length; i++){
  trashpile.push(selectedCards[i]);
}


}

let trashpile=[];
let selectedCards=[];


selectcards(cards);
console.log(trashpile);
putdowncards(selectedcards);
console.log(trashpile);
