// String
// A data type used to represent text 

console.log('String')

const singleQuote= 'Test 1';
const doubleQuote= "Test 2";

// Simple Strings 

console.log(singleQuote); 
console.log(doubleQuote);

const name = `Jane , ${singleQuote} `;  // Backtics ` `

console.log(name);

// To know the datatype
console.log(typeof singleQuote);

// NUmbers 
// very straight forward 
const a =5;
const b= 10.55;

const c = a-b;

console.log (c);
console.log (typeof c);

console.log (c/singleQuote); //NaN Not a Number 

//Booleans  - True (1) or False (0)
const isCool =true ;
console.log(isCool);

if (isCool==true) {
    console.log("Hello you're Cool")
}
else {
    console.log("Oh Nice , Bye .... ")
}

const check= 5;
console.log(check<=10); // True ==

//Null
let age = null;
console.log(age); // null
console.log(typeof(age)); // object !!!! 

age = 20;
console.log(age); // 20 

//Undefined 

let x;
console.log(x); // Default value is undefined
console.log(typeof(x)); // undefined



