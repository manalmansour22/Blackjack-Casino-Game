let firstCard = 10;
let secondCard = 11;
let cards = [firstCard,secondCard];
let sumCards = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl=document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl= document.querySelector("#card-el");

function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: " + cards[0] + " " + cards[1] + " " + cards[2];
    sumEl.textContent = "Sum: " + sumCards;
    if(sumCards <= 20){
        message= "Do you want to draw a new card?";
    }else if(sumCards === 21){
        message= "You've got Blackjack!";
        hasBlackJack = true;
    }else{
        message = "You're out of the game!";
        isAlive = false;
    }
    messageEl.textContent = message ;
}

function newCard(){
    let card = 8;
    cards.push(card);
    sumCards += card;
    renderGame();
}


