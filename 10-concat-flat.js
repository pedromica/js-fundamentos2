const animals = ["🐶", "🐱", "🐂", "🐥", "🦈"];
const newAnimals = ["🦎", "🐟", "🦦", "🦖"];

//    newAnimals.forEach((animal) => {
//    animals.push(animal);
//    });

const updateAnimals = animals.concat(newAnimals);

console.log(updateAnimals);

const batchOfAnimals = [
  ["🪱", "🐙"],
  ["🦕", "🪰"],
  ["🐝", "🐻‍❄️"],
  ["🕸️", "🕊️"],
  ["🪱", "🐙"],
  '🦁',
  ["🪱", "🐙"],
  ["🐎", "🦮"],
  ["🐫", "🐚"],
];

//! RECORRO el array para empujar pero luego lo recorro otra vez por que eran arrays.

// const fullAnimalList = batchOfAnimals.forEach((batch) => {
//     batch.forEach((animal) => {
//         animals.push(animal);
//    })
// });

//!concateno .concat con .flat
const fullAnimalList = animals.concat(batchOfAnimals.flat());

console.log(fullAnimalList);
