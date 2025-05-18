let cards = [];
let sumCards = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl=document.getElementById("message-el");
let sumEl = document.querySelector("#sum-el");
let cardsEl= document.querySelector("#card-el");

let player = {
   name: "Manal",
   chips: 145
}

let playerEl = document.getElementById("player-el");
playerEl.textContent = player.name + ": $" + player.chips;

function getRandomCard(){
    let randomCard = Math.floor(Math.random()*13)+1;
    if(randomCard===1){
        return 11;

    }else if(randomCard===11 ||	 randomCard===12 ||	randomCard===13){
        return 10;
    }else{
        return randomCard;
    }
}
function startGame(){
    isAlive = true;
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards=[firstCard, secondCard];
    sumCards = firstCard + secondCard;
    renderGame();
}

function renderGame(){
    cardsEl.textContent = "Cards: ";
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
    if(isAlive===true && hasBlackJack===false){
        let card = getRandomCard();
        cards.push(card);
        sumCards += card;
        renderGame();
    }
}
