const xMen = [
  { name: 'Wolverine', year: 1974 },
  { name: 'Cyclops', year: 1963 },
  { name: 'Storm', year: 1975 },
  { name: 'Phoenix', year: 1961 },
  { name: 'Beast', year: 1963 },
  { name: 'Gambit', year: 1990 },
  { name: 'Nightcrawler', year: 1975 },
  { name: 'Magneto', year: 1963 },
  { name: 'Professor X', year: 1963 },
  { name: 'Mystique', year: 1978 }
];

function findOldestXMen(listHeroes) {
    let oldestXMen = [];
  let oldestYear = Infinity;

  for (let heroes of listHeroes) {
    if (heroes.year < oldestYear) {
      oldestYear = heroes.year;
      oldestXMen = [heroes.name];
    } else if (heroes.year === oldestYear) {
      oldestXMen.push(heroes.name);
    }
  }
  console.log("El xMen mas antiguo es --->", oldestXMen);
  
}
findOldestXMen(xMen);