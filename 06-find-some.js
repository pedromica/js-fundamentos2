//?
const fridgeFood = ["🍜", "🍔", "🥦", "🍗", "🥪"];
//!
const chiken = fridgeFood.find((food, index) => {
  if (food === "🍗") {
    return true;
  }
});
console.log(`En mi nevera tengo pollo ${chiken}`);
//!
const foodToEat = fridgeFood.find((food, index) => {
  if (food === "🍜") {
    return true;
  }
});
console.log(`En mi nevera tengo; ${foodToEat}`);

//?

const fridgeFood1 = [
  { food: "🍜", id: 1 },
  { food: "🍔", id: 2 },
  { food: "🥦", id: 3 },
  { food: "🍗", id: 4 },
  { food: "🍜", id: 5 },
];

const foodToEat1 = fridgeFood1.find((food, index) => {
  if (food.food === "🍜") {
    return true;
  }
});
//! IN-LINE

/* 

const foodToEat1 = fridgeFood1.find((food, index) => {
  return (food.food === "🍜");
});

const foodToEat1 = fridgeFood1.find((food, index) => food.food === "🍜"); 

*/



//! Con el metodo find solo saca el primer elemnto del array que encuentre, en este caso el ramen con id 5 no lo saca.
console.log(`En mi nevera tengo ${foodToEat1.food} con el id ${foodToEat1.id}`);

const people = [
  { name: "A", age: 10 },
  { name: "B", age: 22 },
  { name: "C", age: 33 },
  { name: "D", age: 44 },
];

//! METODO SOME 

const hasPersonOver30 = people.some((person, index) => {
  return person.age > 30;
});
console.log(hasPersonOver30);

//! LA MISMA FUNCIÓN PERO 'IN-LINE';
/*
  const hasPersonOver30 = people.some ((person) => person.age > 30); 
*/

  //! FUNCION; QUE DEVUELVE TRUE O FALSE SI LE PASO UN ARRAY DE PERSONAS, SI LA PERSONA TIENE AGE MAYOR DE 30.
/* 
const hasPersonOver30 = (peopleArr) => {
  const personOver30 = peopleArr.find((person) => {
    if (person.age > 30) {
      return true;
    }
  });

  return !!personOver30;
}
console.log(hasPersonOver30(people));
 */

/* 
const personOver30 = people.find((person) => {
  if (person.age > 30) {
    return true;
  }
}) 
*/
