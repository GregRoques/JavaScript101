function removeDuplicate(){

var studentBday = [1991, 1984, 1984, 1989]
var mostCommon =[]

for (a=0;a<studentBday.length;a++){
    for (b=1;b<studentBday.length;b++){
        if (studentBday[a] == studentBday[a+b]){
            mostCommon.push(studentBday[a])}
        }
    }
console.log(mostCommon)    
}

removeDuplicate()

