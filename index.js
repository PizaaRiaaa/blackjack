let messageEl = document.querySelector(".message-el");
let sumEl = document.querySelector(".sum-el");
let cardsEl = document.querySelector(".cards-el"); 
let startGameBtn = document.querySelector(".start-game-el")

function startGame() {
  renderGame();
}

function getRandomCards() {
  return Math.floor(Math.random() * 13) + 1
}

function renderGame() {

let firstCard = getRandomCards();
let secondCard = getRandomCards();
let cards = [firstCard, secondCard];
  
  let sum = firstCard + secondCard;
  let hasBlackJack = false;
  let isAlive = true;
  let message = "";

  cardsEl.textContent = "Cards: ";
  sumEl.textContent = `Sum: ${sum}`;

  for(let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " ";
  }

  if(sum <= 20) {
    message = "Do you want to draw a new card?";
  }else if(sum === 21) {
    message = "Wohoo! You've got Blackjack! :)";
    startGameBtn.style.visibility = "visible";
    hasBlackJack = true;
  }else {
    message = "You're out of the game! :(";
    startGameBtn.style.visibility = "visible";
    isAlive = false;
  }

  messageEl.textContent = message;
}

function newCard() {
  sum = 0;
  renderGame()
}
