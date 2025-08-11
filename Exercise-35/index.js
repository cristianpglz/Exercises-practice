const mutants = [
  { name: 'Wolverine', power: 'regeneration' },
  { name: 'Magneto', power: 'magnetism' },
  { name: 'Professor X', power: 'telepathy' },
  { name: 'Jean Grey', power: 'telekinesis' },
  { name: 'Rogue', power: 'power absorption' },
  { name: 'Storm', power: 'weather manipulation' },
  { name: 'Mystique', power: 'shape-shifting' },
  { name: 'Beast', power: 'superhuman strength' },
  { name: 'Colossus', power: 'steel skin' },
  { name: 'Nightcrawler', power: 'teleportation' }
];
let powerQuest = 'telepathy';
function findMutantByPower(mutants, power) {
  const resultQuest = [];
    for (const mutant of mutants) {
        if (mutant.power.toLowerCase() === power.toLowerCase()) {
        resultQuest.push(mutant.name);
        }
    }
    if (resultQuest.length === 0) {
        return 'No mutant found with that power';
    }
    if (resultQuest.length === 1) {
        console.log("Mutante con el Poder", power, "Es --->", resultQuest);
    }
    else {
        console.log("Mutantes con el Poder", power, "Son --->", resultQuest);
    }
}
findMutantByPower(mutants, powerQuest);