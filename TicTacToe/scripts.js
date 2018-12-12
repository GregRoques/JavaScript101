let count = 0;
let gameOn = true;
let player1Squares = [];
let player2Squares = [];

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


const squares = document.getElementsByClassName('square');


if(gameOn){
    
        for(let i = 0; i < squares.length; i++){
            
                squares[i].addEventListener('click',function(event){
                        if(this.innerHTML === "-"){
                            if (count <= 9){
                                count++
                                player1Squares.push(this.id)
                                this.innerHTML = "X"; 
                                document.getElementById('message').innerHTML = "It's O's turn"
                                checkWin(player1Squares,1)

                                count++
                                computerTurn();
                                // console.log(count)
                                document.getElementById('message').innerHTML = "It's X's turn"
                                checkWin(player2Squares,2)
                            }else{
                                GameOn = false;
                                button()
                            }    
                            
                        }else{
                            document.getElementById('message').innerHTML = "Sorry, square's taken!"
                        }
                   
                })
        
            
        
    }
}

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
    gameOn = true;

}

function endGame(winningCombo,whoWon){
    gameOn = false;
   
    document.querySelector('#message').innerHTML = `Congrats to player ${whoWon}`
 
    for(let i = 0; i < winningCombo.length; i++){
        let winningSquare = winningCombo[i];
        let squareElem = document.getElementById(winningSquare);
        console.dir(squareElem)
        squareElem.className += " winning-square"
    }

   button()
}

function button(){
    document.querySelector("#continue").innerHTML +=`
    <button class="button">Play Again?</button>`
    var button = document.getElementsByClassName("button")[0];
    button.addEventListener("click", play)
}

// =============================================== Computer Turn
function computerTurn() {


    const letter = ["A", "B", "C"]
   
    let randomLet = Math.floor(Math.random() * 3)
        let randomNum =  Math.ceil(Math.random() * 3)
        var computerMove = letter[randomLet] + randomNum.toString()
        // console.log(computerMove)
    
   if (!player1Squares.includes(computerMove) && !player2Squares.includes(computerMove)){
            player2Squares.push(computerMove)
            squares[computerMove].innerHTML = "O";
            // console.log(computerMove)
        } else {
            computerTurn()
        }
    }


