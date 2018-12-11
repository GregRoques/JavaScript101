// var iAmAGlobal = 1;
// // not inside a function, so it is a global.
// console.log(iAmAGlobal);
// console.log(window.iAmAGlobal);

// function checkScope(){
//     var iAmAGlobal = 2;
//     // inside of a function; nobody outside of the functin can see or use it
//     iAmAGlobal++;
//     console.log(iAmAGlobal);
// }

// checkScope()
// console.log(iAmAGlobal)

// var a = 1;

// function child(){
//     var b = 2;
//     console.log(a);
//     console.log(b);
//     for (var i=0;i<10;i++){
//         a++
//     }
//     function grandChild(){
//         console.log(`I am a grand child.
//         I can see and change my stuff, my parent's stuff, and their parent's stuff.`)
//         a++
//         b++
//     }
//     grandChild()
//     console.log(a);
//     console.log(b);
// }

// child();

// =======================================================================================

// var q = 1;
// function p(){
//     console.log(q);
//     var q = 3;
//     // if you have VAR x inside a function, ANYWHERE, you can't use the global anymore
//     console.log(q);
// }
// p();

for (let i =0; i<10;i++){
    console.log(i)
}


for(const k=0; k<10; k++){

}

console.log(k)