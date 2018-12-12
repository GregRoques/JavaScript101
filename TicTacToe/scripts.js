let player = 1;
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
                    player1Squares.push(this.id)
                    this.innerHTML = "X"; 
                    document.getElementById('message').innerHTML = "It's O's turn"
                    checkWin(player1Squares,1)

                  
                    computerTurn();
                
                    document.getElementById('message').innerHTML = "It's X's turn"
                    checkWin(player2Squares,2)
                    
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
    location.reload();
    // player1Squares = [];
    // player2Squares = [];
    // squares.innerHTML = "-"
    // gameOn = true;
    // tTT();

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
    
    for( let i =0;i<squares.length;i++){
        if(squares[i].innerHTML != "O" || squares[i].innerHTML != "x"){
            player2Squares.push(computerMove)
            squares[computerMove].innerHTML = "O";
        } else {
            computerTurn()
        }
    }


    
}
       




  
    



// for (let i = 0; i < squares.length; i++){
//     if (squares[i].innerHTML == "-"){
//         squares[i].innerHTML = "O";
//         player2Squares.push(this.id);
//     }

// }