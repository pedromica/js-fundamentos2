const animals = ["🐶", "🐱", "🐂", "🐥", "🦈", "🐂"];

const indexOfBull = animals.indexOf("🐂");
console.log(`El primer Toro está en el índice ${indexOfBull}`);

const lastIndexofBull = animals.lastIndexOf("🐂");
console.log("El último toro está en el indice:", lastIndexofBull);

const people = [
  { name: "A", age: 20 },
  { name: "C", age: 40 },
  { name: "C", age: 40 },
  { name: "B", age: 50 },
  { name: "C", age: 42 },
  { name: "C", age: 45 },
  { name: "D", age: 50 },
  { name: "C", age: 50 },
];

const index = people.findIndex((person) => {
  if (person.name === "C" && person.age >= 45 && person.age <= 50) {
    return true;
  }
});

if (index === -1) {
  console.log("No hemos encontrado a la persona!");
} else {
  console.log("La persona está en la posición:", index);
  console.log("La persona es:", people[index]);
}
