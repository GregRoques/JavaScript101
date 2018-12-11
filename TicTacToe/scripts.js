// ==================================================================GLOBALS
    //init game as player 1 turn
let whosTurn = 1;    
    // Make an array for both players and push each square onto the appropriate array
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

    // squares is an array with 9 objects in it
    // Each Element is an html button
const squares = document.getElementsByClassName('square');
    // console.log(squares)

for (let i = 0; i<squares.length; i++){
    
    squares[i].addEventListener('click',function(event){
        // checks to see if square is taken
        if (this.innerHTML === "-"){
            // it's not, so game on
            if(whosTurn===1){
                
                this.innerHTML = "X"; //update's DOM
                whosTurn = 2; //update JS
                player1Squares.push(this.id) //update DOM with id Element
                checkWin(player1Squares, 1)
                document.getElementById("message").innerHTML = "It is O's turn." //update DOM
            }else{
                this.innerHTML = "O"
                whosTurn = 1;
                player2Squares.push(this.id) //update DOM with id Element
                checkWin(player2Squares, 2)
                document.getElementById("message").innerHTML = "It is X's turn."
            }
        }else{
            document.getElementById("message").innerHTML = "Sorry, that square is taken."
        }
            // console.log(player1Squares);
            // console.log(player2Squares);
    })
}

function checkWin(playerSquares, whoMarked){
    //winning combo we are one
    for (let i=0; i< winningCombos.length; i++){
        //keep track of how many squares in this combo
        let squareCount = 0;
        // checking the square in the winning combo
        for (let j = 0; j < winningCombos.length; j++){
            const winningSquare = winningCombos[i][j]
            if (playerSquares.includes(winningSquare)){
                squareCount++
            }
        }
        if (squareCount === 3){
            console.log("Player Won!");
            console.log(winningCombos[i])}
    }

}
        
    