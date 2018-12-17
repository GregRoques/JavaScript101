$(document).ready(()=>{
    $('button').click(function(){

        let gridSize = $(this).attr('diff');
        console.log(gridSize)
        let cards = []
       
        for(let i = 1; i <= gridSize/2; i++){
            let monsterNumber = i;
            if(i<10){
                monsterNumber = "0"+i
            }
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
            cards.push(`<img src="./images/monsters-${monsterNumber}.png" />`);
        }        
     
        let memoryHTML = '';
    
        cards.forEach((card)=>{
            memoryHTML += `
                <div class="card col-sm-3">
                    <div class="card-holder">
                        <div class="card-front">${card}</div>
                        <div class="card-back"></div>
                    </div>
                </div>
            `
        })
      
  
        $('.memory-game').html(memoryHTML);
        $('.card-holder').click(function(){
            $(this).addClass('flip')

            let cardsUp=$('.flip');
            if (cardsUp.length == 2){
                const card1 = cardsUp[0];
                const card2 = cardsUp[1];
                if (card1.innerHTML == card2.innerHTML){
                    cardsUp.removeClass('flip');
                    cardsUp.addClass('matched');
                
                }else{
                    setTimeout(()=>{
                        cardsUp.removeClass('flip');
                    },2000);
                }
            }
        });
    });
});