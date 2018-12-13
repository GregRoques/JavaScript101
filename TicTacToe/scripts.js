// ================================================================= VARIABLES & WINNING COMBO ARRAY

let count = 0;
let timer= 10;
let gameOn = true;
let player1Squares = [];
let player2Squares = [];

console.log(player1Squares);
console.log(player2Squares)

const winningCombos = [
    ['A1','B1','C1'], //row 1
    ['A2','B2','C2'], //row 2
    ['A3','B3','C3'], //row 3
    ['A1','A2','A3'], //Col 1
    ['B1','B2','B3'], //Col 2
    ['C1','C2','C3'], //Col 3
    ['A1','B2','C3'], //Diag 1
    ['A3','B2','C1'], //Diag 2
]


// ================================================================= THE GAME

const squares = document.getElementsByClassName('square');

for(let i = 0; i < squares.length; i++){
    
    squares[i].addEventListener('click',function(event){
        if(gameOn){
            
            if(this.innerHTML === "-"){
                    
                    this.innerHTML = "X"; 
                    player1Squares.push(this.id)
                    checkWin(player1Squares,1)
                                            
                    if(gameOn){
                        count +=2
                        timer = 10;
                        setTimeout(computerTurn, 1000);
                        timer = 10;
                        
                    }
            
                
            }else{
                document.getElementById('#message').innerHTML = "Sorry, square's taken!"
            }
            
        }
    })  
  
}


// ================================================================= COUNTDOWN TIMER

if (gameOn && timer >1){
    var counterOn =  setInterval(print, 1000);
 }
 

function print(){
        timer--
        document.getElementById('message').innerHTML = `Seconds left: ${timer}`
        if(timer<1 && gameOn){
            count +=2
           computerTurn();
           timer=10;
        }
    }

// ================================================================= RESET CHECKWIN

function checkWin(playerSquares, whoMarked){
    console.log("Checking to see who won...")
   
    for(let i = 0; i < winningCombos.length; i++){   
        
        let squareCount = 0
        
        for(let j = 0; j < winningCombos[i].length; j++){
            let winningSquare = winningCombos[i][j];
            if(playerSquares.includes(winningSquare)){
                squareCount++;
            }
        }
        if(squareCount === 3){
          
            endGame(winningCombos[i], whoMarked)
        }
    }
    
}

// ================================================================= RESET FUNCTION

function play(){
    // location.reload();
    
    for(let i = 0; i < squares.length; i++){
        squares[i].innerHTML = "-";
        squares[i].className = "square"
    }
    player1Squares =[];
    player2Squares = []
    count = 0
    document.getElementById("message").innerHTML=""
    document.querySelector("#continue").innerHTML =""
    document.querySelector('#message').innerHTML = `Game On!`
    gameOn = true;
    var counterOn =  setInterval(print, 1000);

}

// ================================================================= ENDGAME FUNCTION

function endGame(winningCombo,whoWon){
    gameOn = false;
    clearInterval(counterOn)
    console.log(gameOn)
   
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
 
    for(let i = 0; i < winningCombo.length; i++){
        let winningSquare = winningCombo[i];
        let squareElem = document.getElementById(winningSquare);
        console.dir(squareElem)
        squareElem.className += " winning-square"
    }
        if (count <9){
            button()
        }
}


// ================================================================= POPULATE PLAY AGAIN? BUTTON

function button(){
    document.querySelector("#continue").innerHTML +=`
    <button class="button">Play Again?</button>`
    var button = document.getElementsByClassName("button")[0];
    button.addEventListener("click", play)
}

// ================================================================= Computer Turn

function computerTurn() {
            
            if (count <= 9){
                const letter = ["A", "B", "C"]

                let randomLet = Math.floor(Math.random() * 3)
                    let randomNum =  Math.ceil(Math.random() * 3)
                    var computerMove = letter[randomLet] + randomNum.toString()
                    // console.log(computerMove)
                
                if (!player1Squares.includes(computerMove) && !player2Squares.includes(computerMove)){
                        squares[computerMove].innerHTML = "O";
                        player2Squares.push(computerMove)
                        checkWin(player2Squares,2)
                        

                       
                        
                        // console.log(computerMove)
                    } else {
                        computerTurn()
                    }
            }else{
                GameOn = false;
                clearInterval(counterOn)
                button()
            }         

}
