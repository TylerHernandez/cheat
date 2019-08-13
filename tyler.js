
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}
  
cards=[1,2,3,4,5,6,7,8,9,10];
console.log(cards);
shuffle(cards);
console.log(cards);
