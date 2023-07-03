const numbers = [1, 4, 6, 3, 2, 1, 0, 9];

let count = 0;
//! Bucle for normal.

/* for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 3) {
        count += 1;
    }
} */

numbers.forEach((number, index ) => {
    if (number > 3) {
        count += 1;
    };
});
console.log(`La cuenta vale ${count}`);

let evenNumbers = [];
let oddNumbers = [];
//! numeros pares con bucle for.
/* 
for (let i = 0; i < numbers.length; i++){
    if (numbers[i] % 2 === 0){
        evenNumbers.push(numbers[i])
    }
}
console.log(`Los numeros pares son:${evenNumbers}`);
*/
//! numeros pares con bucle forEach
/* 
numbers.forEach((number)=> {
    if (number % 2 === 0) {
        evenNumbers.push (number)
    } else {
        oddNumbers.push(number)
    }
});
 */
//! ternario 
/* 
numbers.forEach ((number) => {
    number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number);
})

console.log(`Los numeros pares con el bucle forEach son:${evenNumbers} y los impares ${oddNumbers}`);

console.log('Even', evenNumbers);
console.log('Odd', oddNumbers);
 */

//! Haciendo una función
const setNumberOddorEven = (number, index, Arr) => {
    number % 2 === 0 ? evenNumbers.push(number) : oddNumbers.push(number);
}

numbers.forEach(setNumberOddorEven);


console.log('Even', evenNumbers);
console.log('Odd', oddNumbers);
