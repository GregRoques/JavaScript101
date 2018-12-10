console.dir(document);

var dragon = document.getElementById("dragon");

console.dir(dragon);


var hero = 20;
var enemy = 20;
var fightOpeningCounter = 0;


dragon.innerHTML = `
<img src="dragon.png"/><br><br>
What would you like to do?\n
<button class="button1">Fight</button> <button class="button2">Flee</button>`

var button1 = document.getElementsByClassName("button1")[0];
var button2 = document.getElementsByClassName("button2")[0];



function coward(){

    dragon.innerHTML = `
        <img src="coward.jpg"/>
    `
}



function imaDragon(){
        if (fightOpeningCounter<1){
            dragon.innerHTML =`
            <img src="dragon.png"/><br><br>


            You have chosen to fight the dragon. You must role a 9 or higher or you will be burnt to a crisp.
            <br><br>


            <button class="button3">Roll Dice</button>

            `
            fightOpeningCounter++
            var button3 = document.getElementsByClassName("button3")[0];
            button3.addEventListener("click", diceRoll)
            }else{
                dragon.innerHTML =`
                <button class="button3">Roll Dice</button>`
                var button3 = document.getElementsByClassName("button3")[0];
                button3.addEventListener("click", diceRoll)
        }
        
    }


    function diceRoll(){
        var dice = []
        var i=0
            while (i<2){
                    dice.push(Math.floor(Math.random() * 6))
                    i++
        }

        enemy -= ((dice[0]+1) + (dice[1]+1))

    var diceImg = [
        "<img src='d1.gif'/>",
        "<img src='d2.gif'/>",
        "<img src='d3.gif'/>",
        "<img src='d4.gif'/>",
        "<img src='d5.gif'/>",
        "<img src='d6.gif'/>"
        ]



        if(enemy > 0){
            dragon.innerHTML =`
            <img src="dragon.png"/><br><br>
                ${diceImg[dice[0]]}  ${diceImg[dice[1]]}
                <br><br>
                
                You reduced the dragon's health to ${enemy}.
                <br><br>`

                heroDamage = (Math.floor(Math.random() * 6))
                hero -= heroDamage

                if(hero >0){
                    dragon.innerHTML +=`
                    The dragon inflicted ${heroDamage}, reducing your health to ${hero}.
                    <button class="button3">Roll Dice</button>

                    `
                    var button3 = document.getElementsByClassName("button3")[0];
                    button3.addEventListener("click", diceRoll)
                } else {
                    dragon.innerHTML =`
                    <img src="died.jpg"/>`
                }
            }else{
                dragon.innerHTML =`
                ${diceImg[dice[0]]}  ${diceImg[dice[1]]}
                <br><br>
                <img src="slayedDragon.png"/>
                <br><br>
                You killed the Dragon!
                ` 
            }

    
            // else{
            //     dragon.innerHTML = `${diceImg[dice[0]]}  ${diceImg[dice[1]]}
            //     <img src="died.jpg"/>`
            // }
        

        // if( (dice[0]+1) + (dice[1]+1) >=6){
        //     dragon.innerHTML =`
        //         ${diceImg[dice[0]]}  ${diceImg[dice[1]]}
        //         <br><br>
        //         <img src="slayedDragon.jpg"/>`
        // } else {
        //     dragon.innerHTML =`
        //     ${diceImg[dice[0]]}   ${diceImg[dice[1]]}
        //         <br><br>
        //         <img src="died.jpg"/>`
        // }

        }

button1.addEventListener("click", imaDragon)

button2.addEventListener("click", coward)

