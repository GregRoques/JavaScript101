var counter = 0
var endDate = new Date("December 25, 2018 00:00:00");
var timeStamp = endDate.getTime();

function handleClick(){
    counter +=1

    if(counter > 1) counter = 0;

    let events = [{
        date: "December 25, 2018 00:00:00",
        bgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPiFq9fY5Spew1im8y_ux1my6kp6r7J8c-wZKlLOlfxbfdEAZ0",
        text: "Countdown to Christmas",
        shade: "2px 2px 4px red",
        button: "New Year's Countdown"
       
    },
    {
        date: "January 1, 2019 00:00:00",
        bgURL: "https://cdn1.parksmedia.wdprapps.disney.com/media/blog/wp-content/uploads/2016/12/ny398e0950fi.jpg", 
        text: "Countdown to the New Year",
        dropShade: "2px 2px 4px #FFDF00",
        button: "Christmas Day Countdown"
       
    },
    
]

    
        var endDate = new Date(events[counter].date);
        document.querySelector('body').style.background= `url('${events[counter].bgURL}') repeat center`
        console.log(document.querySelector('body').style)
        document.querySelector("h1").innerHTML = events[counter].text
        document.querySelector("h1").style.textShadow = `${events[counter].dropShade}`
        document.querySelector("button").innerHTML = events[counter].button
        

        timeStamp = endDate.getTime();
        

    }
    

    


function updateTimer (){
    var now = new Date();
    var nowAsTimeStamp = now.getTime();
    
    var timeRemaining = timeStamp - nowAsTimeStamp;

	var seconds = Math.floor((timeRemaining / 1000) % 60);
	var minutes = Math.floor((timeRemaining / 1000 / 60) % 60);
	var hours = Math.floor((timeRemaining / (1000 * 60 * 60)) % 24);
	var days = Math.floor((timeRemaining / (1000 * 60 * 60 * 24)) % 7);
    var weeks = Math.floor(timeRemaining / (1000 * 60 * 60 * 24 * 7));
    
    document.getElementsByClassName('weeks')[0].innerHTML = weeks
    document.getElementsByClassName('days')[0].innerHTML = days

    document.querySelector('.hours').innerHTML = hours;
    document.querySelector('.minutes').innerHTML = minutes;
    document.querySelector('.seconds').innerHTML = seconds;
    // querySelector only get the first one, thus it is not an array like getElementsByClassName


}


setInterval(updateTimer,100);





