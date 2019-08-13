cards=[1,2,3,4,5,6,7,8,9,10];
let trashpile=[];
let selectedCards=[];



function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

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

var size = 4; //Maximum Array size
for(var i=0; i<size; i++) {
	//Taking Input from user
	selectedCards[i] = prompt('Select your cards to put down ' + (i+1));
}
console.log(selectedCards);

}


function putdowncards(){

for(let i=0; i<selectedCards.length; i++){
  trashpile.push(selectedCards[i]);
}


}



selectcards(cards);
putdowncards();

console.log(trashpile);
