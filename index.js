let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el"); 

let firstCard = Math.floor(Math.random() * 11) + 2;
let secondCard = Math.floor(Math.random() * 11) + 2;

let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

sumEl.innerText += sum;
cardsEl.innerText += `${firstCard} ${secondCard}`;

function addMessage(message) {
  messageEl.innerText = message;
}

function startGame() {
  window.location.reload();
}

if(sum < 21) {
  addMessage("Do you want to draw a new card?")
}else if(sum === 21) {
  addMessage("Wohoo! You've got Blackjack! :)")
  hasBlackJack = true;
}else if(sum > 21) {
  addMessage("You're out of the game! :(")
 isAlive = false;
}

console.log(message);
