const placesToTravel = [
  { id: 5, name: "Japan" },
  { id: 11, name: "Venecia" },
  { id: 23, name: "Murcia" },
  { id: 40, name: "Santander" },
  { id: 44, name: "Filipinas" },
  { id: 59, name: "Madagascar" },
];

function placeFinder(places) {
    let idNotFound = [11, 40];
    for (const place of places) {
        if (idNotFound.includes(place.id)) {
            console.log(`El lugar con ID ${place.id} no se encuentra en la lista.`);
        } else {
            console.log(`Voy a viajar a ${place.name}`);
        }
    }
}
placeFinder(placesToTravel);