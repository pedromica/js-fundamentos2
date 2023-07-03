const age = 30
let isAllowed;

if (age > 30){
    isAllowed = true;
} else {
    isAllowed = false;
}

//! Ternario

age > 30 ? (isAllowed = true) : (isAllowed = false);
      // ? = if           // : = else

//! Ternario 

isAllowed = age > 30 ? true : false;


const numberA = 2;

const numberB = 4;

let operation = 'multiply'

/* 
let result; 

if ( operation === 'multiply') {
    result = numberA * numberB
} else {
    result = numberA / numberB
} 

*/
//!

const result = operation === 'multiply' ? numberA * numberB : numberA / numberB; 

//! 

const multiply = (a,b) => a * b;
const divide = (a,b) => a /b;

const result1 = operation === 'multiply' ? multiply(numberA,numberB) : divide(numberA,numberB);











