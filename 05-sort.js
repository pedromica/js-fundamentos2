const numbers = [1, 10, 4, 5, 3, 6];
//!FUNCIONES SORT PARA NÚMEROS
const orderNumberAscending = (a, b) => a - b;
const orderNumberDescending = (a, b) => b - a;

numbers.sort(orderNumberDescending);
/* numbers.sort((a, b) => {
    if ( a > b){
        return 1;
    }

    if (a < b) {
        return -1

    }

    return 0; 
    

} ); */

console.log(numbers);

const names = ["pepe", "juan", "Pepe", "Ramon", "Pedromi", "Alberto"];
//! FUNCIONES SORT PARA STRINGS
const compareStringsAscending = (a, b) => a.localeCompare(b);
const compareStringsDescending = (a, b) => b.localeCompare(a);

//! names.sort(compareStringsAscending);
names.sort(compareStringsDescending);

/* names.sort((a, b) => {
    return a.localeCompare(b)
}); */

console.log(names);


const people = [
    { name: 'juan', age: 30 },
    { name: 'Ramon', age: 40 },
    { name: 'Pepe', age: 50 },
    { name: 'pepe', age: 20 },
    { name: 'alberto', age: 75 },
]

people.sort((a, b)=> {
    return compareStringsAscending(a.name, b.name);
})

people.sort((a,b) => {
    return orderNumberAscending (a.age, b.age);
})
console.log(people);