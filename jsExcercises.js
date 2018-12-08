// =============================================================Problem 1
function week(){

    var days=[
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ]

    num = 0

    while(num<7){
        if(days[num] == days[0] || days[num] == days[6]){
            // return "Sleep in."
            console.log("Sleep in.")
        } else {
            // return "Go to Work."
            console.log("Go to Work.")
        }
        num++
    }
}

week();



// =============================================================Problem 2


function date(month, year){

    var calendar = {
        "January": 31,
        "February": 28,
        "March":31,
        "April": 30,
        "May": 31,
        "June": 30,
        "July": 31,
        "August": 31,
        "September": 30,
        "October": 31,
        "November": 30,
        "December": 31
    };

    if(month == "February"){
        if(year % 400 == 0){
            return calendar["February"] +1
        } else if(year % 100 == 0) {
            return calendar["February"]
        } else if(year % 4 == 0){
            return calendar["February"] + 1
        } else {
            return calendar["February"]
        }

    }else{
        return calendar[month]
    }    
}

console.log(date("February", 2000));


// =============================================================Problem 3



function calculate(bill,service){

    var tip;
    var total;

    if(service == "good"){
        tip = bill * .2;
       
    } else if(service == "fair"){
        tip = bill * .15;
        
    } else if(service=="bad"){
        tip = bill * .10;
        
    } else{
        return `No Tip? You are a terrible customer!`
    }

    total = bill + tip
    roundedTotal = Math.floor(total);
    console.log( "$" + roundedTotal)

    // var tipAmmount={
    //     poor: .01,
    //     fair: .15,
    //     good: .2
    // }

    // console.log((total *tipAmmounts[service]) + total)

}
calculate(100.00,"good");

