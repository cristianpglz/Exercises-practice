const names = [
  'Peter',
  'Steve',
  'Tony',
  'Natasha',
  'Clint',
  'Logan',
  'Xabier',
  'Bruce',
  'Peggy',
  'Jessica',
  'Marc'
];
let name = 'Xabier';
function nameFinder(nameList, nameParam) {
    console.log(`Buscando el nombre: ${nameParam}`);
    console.log(`Lista de nombres: ${nameList}`);
    
    
    for (let i = 0; i < nameList.length; i++) {
        if (nameList[i] === nameParam) {
            return `El nombre ${nameParam} se encuentra en la lista.`;
        }
}
return `El nombre ${nameParam} no se encuentra en la lista.`;
}


console.log(nameFinder(names, name));
