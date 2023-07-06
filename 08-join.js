const words = ["Hola", "que", "tal", "?"];

//! Convierto Array a string, con bucle for.
let sentence = "";

for (let i = 0; i < words.length; i++) {
  sentence += words[i];
  sentence += " ";
}

console.log(sentence);

//! Con el metodo join,
const frase = words.join("");
console.log(frase);
