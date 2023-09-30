//Functions

//console.log() => built in func.

//Function Declaration

// 1.
// function name(params) {
//    statements
//      have access to "this" keyword
// }

// 2.
// const name = function name(params) {
//     statements
// }

// 3. Arrow function - popular
// const name = (params) =>{
//     statements
// }


function SQUARE(number) {
    console.log('Working ...');
    return number * number ;
}

//Function Call
//Invoking the function 


//SQUARE();
const result = SQUARE(5);
console.log(result);


//application 

function sayHi(name){
    console.log(`Hi , ${name}`);
    if (name=='Joe') {
        console.log('Joe Mama');
    }
}

sayHi('Joe');
sayHi('Mohan');