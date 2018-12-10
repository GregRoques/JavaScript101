// document.getElementById("roll-button").addEventListener('click', function(){

// })

function roll(){
            // // console.log("User rolled")
            //         // Everything belongs to the window
            //         // You never need to you window. beauce it's already assumed.
            // console.log(window)
            //         // window.alert("I'm an alert box!")
            //         // above is the same as saying
            //         // alert("I'm an alert box")...because EVERYTHING belongs to the window
            //         // also: window.document is same as document.

            //         // .log on an html "thing" will show you html
            //         // .dir on an html "thing" will show you the js object

            // console.log(document);
            // // console.dir(document);
            // console.dir(document.doctype);

    // get a random number between 1 and 6 for each die
    var rand1 = Math.ceil(Math.random() * 6);
    var rand2 = Math.ceil(Math.random() * 6);
    console.log(rand1);
    
    // the dice images dN.gif. we have 2 random numbers for the N;
    // First, get the dice html thing
    var dice = document.getElementById("dice");
    // var dice =document.querySelector("#dice")... will only ever return the first thing, not an array
    console.dir(dice);
    var die1= dice.children[0];
    var die2= dice.children[1];
    die1.src = `d${rand1}.gif`;
    die2.src = `d${rand2}.gif`;

    if (rand1 + rand2 > 8){
        console.log("You Won!");
        var dragonDiv = document.getElementById("dragon");
        dragonDiv.children[0].src="slayedDragon.png";
        dragonDiv.children[0].style.height = "200px";
        dragonDiv.children[0].style.width = "200px";
    }else{
        console.log("You Lost!");
        var dragonDiv = document.getElementById("dragon");
        dragonDiv.children[0].src="died.jpg"
    }
        
    




}