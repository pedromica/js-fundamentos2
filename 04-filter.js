/* 
const animals = ['🐮','🦄','🦅','🐐','🐼','🐣','🦁']; */
/* 
const herbAnimals = []; 

for (let i = 0; i < animals.length; i++) {
    const animal = animals[i];

    if (animal === '🐮' || animal === '🐣') { 
        herbAnimals.push(animal);º
    }
}
 */

//! Codigo que dado un array de objeto filtra y lo que haces despues de filtrarlos lo mapea.

const animals = [
  { icon: "🐮", herb: true },
  { icon: "🦄", herb: true },
  { icon: "🦅", herb: false },
  { icon: "🐐", herb: false },
  { icon: "🐼", herb: true },
  { icon: "🐣", herb: true },
  { icon: "🦁", herb: false },
];

/* const herbAnimals = animals.filter((animal) => {
    return animal.herb;
});

console.log(herbAnimals);

const herbAnimalsIcons = herbAnimals.map((animal) => {
    return animal.icon;
});

console.log(herbAnimalsIcons);
 */

//? concatenados
const herbAnimals = animals
    .filter((animal) => {
        return animal.herb;
    })
    .map((animal) => {
        return animal.icon;
    });

console.log(herbAnimals);
//?

/* const herbAnimals = animals.filter((animal) => {
    const isHerbAnimal = animal  === '🐼' || animal === '🐮' || animal === '🦄'  ;
    console.log({isHerbAnimal, animal}); 

    return isHerbAnimal;
})
 */

/* console.log(`Los animales hervíboros son : ${herbAnimals}`); */