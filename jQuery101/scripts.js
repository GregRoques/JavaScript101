// jQuery is a JavaScript library.
// THat means jQuery IS JS
// JQuery CANNOT live without JS.

// jQuery allows you to change sTuff, but doesn't keep track of the changes
// in a big ... this is CONFUSING!!!
// React, Angular, and Vue are the answer to this

// jQuery directly manipulates the DOM
// This is expensive - takes a lot of resources
// React and others use "virtualDom" which is efficient

// A $ means I'm writing JS, but not just any JS, I'm writing jQuery
// console.log($);

// targeting stuff
console.dir(document.getElementsByTagName('div'));
console.dir(document.querySelector('.container'));
console.dir(document.getElementsByClassName('container'));
console.dir($('.container'));
$('#row')
// document.getElementById('row').children[0]
console.log($('#row p'))

// jQuery targets with CSS rules.
// jQuery adds listeners as methods... ie, click = .click()
// a listener takes 1 arg: code to run when even happens
$('#hide').click(function(){
    // console.log("SOmeone clicked on hide!!")
    $('#thing').hide();
})
$('#show').click(function(){
    $('#thing').show();
})
$('#toggle').click(function(){
    $('#thing').toggle()
})

$('#text').click(function(){
    $('#thing').text("Change me to Something")
})

$('#CSS').click(function(){
    $('#thing').css({
        "background-color": "green",
        "border-radius": "50%",
        "font-size": "100px"
    
}) })

$('#prepend').click(function(){
    $('#thing').prepend("prepended text");
})

$('#append').click(function(){
    $('#thing').append("appended text");
})

$('#slide-out').click(function(){
    $('#thing').slideToggle(1500);
})

$('#fade-out').click(function(){
    $('#thing').fadeToggle(1500);
})

$('#animate').click(function(){
    $('#thing').animate({
        'background-color': 'red',
        'height': '200',
        'margin-left': '100px',
        
}, 3000)})

// Native JS way
// document.getElementById('hide').addEventListener('click',function(){
//     console.log("SOmeone clicked on hide!!")
// })