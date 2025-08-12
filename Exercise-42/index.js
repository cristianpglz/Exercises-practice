const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];
let reciveparam = "La antorcha humana";
let reciveparam2 = "Mr. fantástico";

function swap(list, param1, param2){
    param1 = param1.toLowerCase() || param1.toUpperCase();
    param2 = param2.toLowerCase() || param2.toUpperCase();
    list = list.map(item => item.toLowerCase() || item.toUpperCase());
    
    const index1 = list.indexOf(param1) ;
    const index2 = list.indexOf(param2);
    console.log(`Índice de "${param1}": ${index1}`);
    console.log(`Índice de "${param2}": ${index2}`);
    
    if (index1 === -1 || index2 === -1) {
        console.log("Uno o ambos parámetros no se encuentran en la lista.");
        return;
    }

    [list[index1], list[index2]] = [list[index2], list[index1]];
    console.log(`Intercambiados: ${param1} con ${param2}`);
    console.log("Lista actualizada:", list);
    return list;
}


swap(fantasticFour, reciveparam, reciveparam2);