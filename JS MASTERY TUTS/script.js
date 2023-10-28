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

//Say HI

function sayHi(name){
    console.log(`Hi , ${name}`);
    if (name=='Joe') {
        console.log('Joe Mama');
    }
}

sayHi('Joe');
sayHi('Mohan');


//Add

function add(a,b){
    return a+b;
}//only first return possible

const sum = add (2,2);

console.log(sum);

//Arrow Function 
const sq = (number) =>{
    return number * number;
}

// function sq(number) {
//     return number*number;
// }

const sq1 = (number)=> number*number;

const res = sq(10);

console.log(res); 