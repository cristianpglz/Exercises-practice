function findArrayIndex(array, text) {
    for (const textElement of array) {
        if (textElement.toLowerCase() === text.toLowerCase()) {
            console.log(`El texto "${text}" es: ${array.indexOf(textElement)}`);
            return;
        }
    }
    console.log(`El texto "${text}" no se encuentra en la lista.`);  
}

function deleteArrayIndex(array, text) {
    for (const textElement in array) {
        if (array[textElement].toLowerCase() === text.toLowerCase()) {
            array.splice(textElement, 1);
            return;
        }
    }
    console.log(`El texto "${text}" no se encuentra en la lista.`);
}
const mainCharacters = [
  "Luke",
  "Leia",
  "Han Solo",
  "Chewbacca",
  "Rey",
  "Anakin",
  "Obi-Wan",
];

let reciveparam = "han solo";

findArrayIndex(mainCharacters, reciveparam);
deleteArrayIndex(mainCharacters, reciveparam);
console.log("Lista de personajes actualizada:", mainCharacters);



