const numbers = [1,2,3,4,5];

//! con bucle .forEach sumo
// let sum = 0;
//
// numbers.forEach(number => {
//    sum += number;
//    
// });
//! con reduce

const sum = numbers.reduce((acc, next)=> {
    // este console log es explicativo
    console.log(acc,next);

    return acc + next;
}, );

console.log(sum);

const words = ["Hola", "que", "tal", "?"];

conjoin =words.join(' ');

console.log(conjoin);


conreduce = words.reduce((acc,next) =>{
    // este console log es explicativo
    console.log(acc, next);

    return `${acc} ${next}`;
})

console.log(conreduce);

//! REDUCE CON FILTER

const animals = [
    { icon: "🐮", herb: true },
    { icon: "🦄", herb: true },
    { icon: "🦅", herb: false },
    { icon: "🐐", herb: false },
    { icon: "🐼", herb: true },
    { icon: "🐣", herb: true },
    { icon: "🦁", herb: false },
  ];

//!con filter
const herviboros = animals.filter(animal => animal.herb);
console.log(herviboros);

const herbAnimals = animals.reduce((acc, next) => {
    // este console log es explicativo
    console.log(acc, next);

    if (next.herb) {
        acc.push(next);
    }

    return acc;
}, [] );

console.log(herbAnimals);