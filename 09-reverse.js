const people = [
    { name: "A", age: 20 },
    { name: "B", age: 40 },
    { name: "C", age: 40 },
    { name: "D", age: 50 },
  ];
//! Truco, copio array con .slice y despues le meto un .reverse para trabajar con el, ya que el .reverse me modifica el array original.
//  const newPeople = people.slice();
//  newPeople.reverse();
//  console.log('New People:',newPeople);
//  console.log('People:', people);

//!Truco, concateno 
const reversePeople = people.slice().reverse();
console.log('Reversed People:',reversePeople);
console.log('People:', people);


