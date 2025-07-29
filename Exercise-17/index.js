const alien = {
    name: 'Xenomorph',
    species: 'Xenomorph XX121',
    origin: 'Unknown',
    weight: 180
};

for (const info in alien) {
    console.log(`La propiedad ${info} tiene cómo valor: ${alien[info]}`);
}