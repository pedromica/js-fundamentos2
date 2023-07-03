
const animals = ['🐼' , '🦦' , '🐸' , '🐐'];
// const food = [];
//! Bucle for 
/* 
for (let i = 0; i < animals.length; i++) {
    const animal = animals[i]

    let animalFood;

    if (animal === '🐼') {
        animalFood = '🎍'
    } else if (animal === '🦦') {
        animalFood = '🐟'
    } else if (animal === '🐸') {
        animalFood = '🪱'
    } else if (animal === '🐐') {
        animalFood = '🍔'
    }

    food.push(animalFood);
}

console.log(`Para los animales ${animals}`);
console.log(`Su comida favorita es  ${food}`);


 */

//!Bucle forEach()

/* 
animals.forEach( (animal) => {
    let animalFood;

    if (animal === '🐼') {
        animalFood = '🎍'
    } else if (animal === '🦦') {
        animalFood = '🐟'
    } else if (animal === '🐸') {
        animalFood = '🪱'
    } else if (animal === '🐐') {
        animalFood = '🍔'
    }

    food.push(animalFood);
});
 */

//! Hago función y le meto el coolback 

const getAnimalFood = (animal) => {
    let food;

    if (animal === '🐼') {
        food = '🎍'
    } else if (animal === '🦦') {
        food = '🐟'
    } else if (animal === '🐸') {
        food = '🪱'
    } else if (animal === '🐐') {
        food = '🍔'
    }

    return food;
};
//! hago el forEach pero le meto la funcion, coolback.
// animals.forEach(getAnimalFood);

const animalFood = animals.map((animal) => {
    const food = getAnimalFood(animal)
    return food;
});
console.log(animalFood);

console.log(`Para los animales ${animals}`);
console.log(`Su comida favorita es  ${animalFood}`);