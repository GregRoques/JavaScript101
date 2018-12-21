// ==================================================== =================== Global Variables & Hiding Continue Button During GamePlay

const freshDeck = createDeck();
let theDeck = freshDeck.slice();
let playerScore=0;
let dealerScore=0;
let oneDeal = 0
let playerHand = [];
let dealerHand = [];
$('.continueButton').hide()




// ======================================================================== DEAL BUTTON

// blackjack deal function
$('.deal-button').click(()=>{
    if(oneDeal<1){
        // console.log("User clicked on the deal button")
        // we need a deck!
        theDeck = freshDeck.slice();
        // we have a deck. we need to shuffle it!
        shuffleDeck(theDeck);
        // We have a shuffled deck now. Give each player their cards
        // playerHand.push(theDeck[0])
        // shift pulls the first element off of the array
        // and retuns it
        // console.log(theDeck)
        // get the first element off of the deck and put it in topCard
        let topCard = theDeck.shift();
        // put topCard in the playerHand array
        playerHand.push(topCard);
        // Take next card in deck
        topCard = theDeck.shift();
        // give the dealer the new topCar
        dealerHand.push(topCard);
        topCard = theDeck.shift();
        playerHand.push(topCard);
        topCard = theDeck.shift();
        dealerHand.push(topCard);
        // console.log(theDeck.length)
        placeCard('player',1,playerHand[0]);
        placeCard('dealer',1,dealerHand[0]);
        placeCard('player',2,playerHand[1]);
        placeCard('dealer',2,dealerHand[1]);
        calculateTotal(playerHand,'player')
        calculateTotal(dealerHand,'dealer')
        oneDeal = 20;
    }else{
        swal("You must Hit or Stand");
    }
})

// ======================================================================== HIT BUTTON

$('.hit-button').click(()=>{
    if(oneDeal>0){
        // grab the next card in the deck 

        if(calculateTotal(playerHand,'player') <=21){
        
        const topCard = theDeck.shift();
        // push it onto the players Hand
        playerHand.push(topCard)
        placeCard('player',playerHand.length,topCard)
        calculateTotal(playerHand, 'player')   
        }else{
           
            checkWin();
        }
    } else{
        swal("Slow down...you gotta Deal first.")
    }

 })


// ======================================================================== STAND BUTTON

$('.stand-button').click(()=>{
    if(oneDeal>0){
        let dealersTotal = calculateTotal(dealerHand,'dealer');
        while (dealersTotal <17){
            const topCard = theDeck.shift();
            dealerHand.push(topCard);
            placeCard('dealer',dealerHand.length,topCard);
            dealersTotal = calculateTotal(dealerHand,'dealer');
        }
        checkWin();
        
    }else{
        swal("Slow down...you gotta Deal first.")
    }
})

// ==================================================================================== CHECK WIN
function checkWin(){
    const playerTotal = calculateTotal(playerHand,'player');
    const dealerTotal = calculateTotal(dealerHand,'dealer');

     // 1. If the player has > 21, player busts and loses.
    if (playerTotal > 21){
        dealerScore++;
        document.querySelector(`.dealerNameScore`).innerHTML = `${dealerScore}`;

        if (dealerScore % 2 !=0){
        document.querySelector(`.dealerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.dealerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("YOU LOSE!")
        
    }

   
    // 2. If the dealer has > 21, dealer busts and loses.
    else if (dealerTotal > 21){
        playerScore++;
        document.querySelector(`.playerNameScore`).innerHTML = `${playerScore}`;

        if (playerScore % 2 !=0){
        document.querySelector(`.playerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.playerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("YOU WIN!")
        
    }

    // 3. If playersHand.length == 2 AND playerTotal == 21... BLACKJACK

    else if (playerHand.length ==2 && playerTotal ==21){
        playerScore++;
        document.querySelector(`.playerNameScore`).innerHTML = `${playerScore}`;

        if (playerScore % 2 !=0){
        document.querySelector(`.playerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.playerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("BLACKJACK!")
        
    }
    // 4. If dealerHand.length == 2 AND dealersTotal == 21... BLACKJACK

    else if (dealerHand.length ==2 && dealersTotal ==21){
        dealerScore++;
        document.querySelector(`.dealerNameScore`).innerHTML = `${dealerScore}`;

        if (dealerScore % 2 !=0){
        document.querySelector(`.dealerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.dealerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("BLACKJACK!")
        
    }
    // 5. If player > dealer, player wins

    else if(playerTotal > dealerTotal){
        playerScore++;
        document.querySelector(`.playerNameScore`).innerHTML = `${playerScore}`;

        if (playerScore % 2 !=0){
        document.querySelector(`.playerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.playerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("YOU WIN!")
    }
    // 6. if dealer > player, dealer wins
    else if (dealerTotal > playerTotal){
        dealerScore++;
        document.querySelector(`.dealerNameScore`).innerHTML = `${dealerScore}`;

        if (dealerScore % 2 !=0){
        document.querySelector(`.dealerNameScore`).style = `transform: rotateY(360deg);`;
        } else{
            document.querySelector(`.dealerNameScore`).style = `transform: rotateY(0deg);`;
        }
        gameOverScreen("YOU LOSE!")
        
    }
    // 7. else... push (tie)
    else{
        gameOverScreen("TIE!")
        
    }
}

// ======================================================================== CALCULATE TOTAL

function calculateTotal(hand, who){
    let handTotal = 0;
    let numAces = 0;
    let hasAce = false;
   
    hand.forEach((card,i)=>{
        let thisCardsValue = card.slice(0,-1);
      
        if(thisCardsValue > 10){
            thisCardsValue = 10; 
        }else if(thisCardsValue == 1){   
            hasAce = true;
        }
        handTotal += Number(thisCardsValue);
    })
  
    if(hasAce & handTotal <= 10){
        handTotal += 10;
    }
    
    console.log(handTotal)
    const classSelector = `.${who}-total`;
    $(classSelector).html(handTotal);
    return handTotal

}

// ======================================================================== PLACE CARD

function placeCard(who,where,what){
    // who = ? ... option 1: 'player', option: 'dealer'
    // where = ? ... option 1-6
    // what = ? ... 1h-13h, 1s-13s, 1d-13d, 1c-13c 
    const classSelector = `.${who}CardHolder .card-${where}`;
    let memoryHTML = ``;


    memoryHTML = `
        <div class="card">
            <div class="card-holder">
                <div class="card-front"><img src="cards/${what}.png" /></div>
                <div class="card-back"></div>
                
            </div>
        </div>`


    $(classSelector).html(memoryHTML);

    
    
}

// ======================================================================== CREATE DECK

function createDeck(){
    // I am a local variable. No one knows about this var, but me!
    let newDeck = [];
    // Card = suit letter + value
    const suits = ['h','s','d','c'];
    // Outer loop is for each suit
    // a foreach loop takes 1 arg: function
    // that function gets 2 args:
    // 1. what to call this element in loop
    // 2. index loop is on
    suits.forEach((s,index)=>{
        // inner loop for card value
        for(let c = 1; c <= 13; c++){
            newDeck.push(`${c}${s}`);
        }
    })
    // console.log(newDeck)
    return newDeck;
}

// ======================================================================== SHUFFLE DECK

function shuffleDeck(aDeckToBeShuffled){
    // Loop. A lot. Like those machines in casinos that make 
    // funny noises.
    // When the loop (lots of times) is document, the array 
    // (deck) will be shuffled
    for(let i = 0; i < 100000; i++){
        let rand1 = Math.floor(Math.random() * 52);
        let rand2 = Math.floor(Math.random() * 52);
        // we need to switch aDeckToBeShuffled[rand1] with
        // aDeckToBeShuffled[rand2].
        // BUT, we have to save the value of one of them so
        // we can keep it for later
        let card1Defender = aDeckToBeShuffled[rand1];
        aDeckToBeShuffled[rand1] = aDeckToBeShuffled[rand2]
        aDeckToBeShuffled[rand2] = card1Defender;
    }
    // console.log(aDeckToBeShuffled);
}


// ================================================================================= Game Over Screen

    function gameOverScreen(winOrLose){

        // Announce if you won or lost
        document.querySelector(`.gameOver`).innerHTML = `${winOrLose}`
        document.querySelector(`.gameOver`).style = `transform: scale(200) `

        // Hide GameOnButtons
        $(`.buttons`).hide()
        $('.continueButton').show()

        // Populate continue Button
        $(`.continueButton`).innerHTML=`
        <button>Play Again</button>`
        
        
        $('.continueButton').click(function(){
            console.log("continue")
        
            
            document.querySelector(`.gameOver`).innerHTML = ``;
            document.querySelector(`.gameOver`).style = `transform: scale(0);`;
            $(`.buttons`).show()
            $('.continueButton').hide()
           
            for(let i=1; i<=6; i++){
                const classSelector = `.card-${i}`;
                $(classSelector).html(``);
            }
            document.querySelector(`.player-total`).innerHTML = `0`;
            document.querySelector(`.dealer-total`).innerHTML = `0`;
           
            oneDeal = 0;
            playerHand = [];
            dealerHand = [];

        })
    }
