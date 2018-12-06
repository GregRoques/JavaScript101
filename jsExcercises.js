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
        if(days.num == days[0] || days.num == days[6]){
            return "Sleep in."
        } else {
            return "Go to Work."
        }
        num++
    }
}

console.log(week());

// =============================================================Problem 3



function calculate(bill,service){

    var tip;
    var total;

    if(service == "good"){
        tip = bill * .2;
        total = bill + tip
    } else if(service == "fair"){
        tip = bill * .15;
        total = bill + tip
    } else if(service=="bad"){
        tip = bill * .10;
        total = bill + tip
    } else{
        return `No Tip? You are a terrible customer!`
    }

    return total;

}
console.log(calculate(100.00,"good"));

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
        if(year % 400 != 0){
            return calendar["February"]
        } else {
            return calendar["February"] + 1
        }

    }else{
        return calendar[month]
    }    
}

console.log(date("February", 2000));




