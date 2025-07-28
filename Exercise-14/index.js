const words = [
  'code',
  'repeat',
  'eat',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code',
  'enjoy',
  'sleep',
  'code'
];
function repeatCounter(list) {
    const counter = {};
    // Contar ocurrencias
    for (let i = 0; i < list.length; i++) {
        const word = list[i];
        counter[word] = (counter[word] || 0) + 1;
    }
    // Mostrar resultados sin repetir palabras
    for (const word in counter) {
        console.log(`La palabra "${word}" se repite ${counter[word]} veces.`);
    }
}

repeatCounter(words);




