let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard,secondCard];
let sumCards = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;
let message = "";

let messageEl=document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl= document.querySelector("#card-el");


function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1;
    return randomCard;
}
function startGame(){
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
    // + cards[0] + " " + cards[1] + " " + cards[2]
    for(let i=0; i<cards.length; i++){
        cardsEl.textContent+=cards[i]+" "
    }
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
    let card = getRandomCard();
    cards.push(card);
    sumCards += card;
    renderGame();
}
