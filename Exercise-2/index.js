const jedi = {name: "Luke Skywalker", age: 19};

jedi.age = 25;

console.log("El nombre del Jedi es " + jedi.name);
console.log("La edad del Jedi es " + jedi.age);








///

const personData = {
    name: "Leia",
    last_name: "Organa",
    age: 25,
    location: "Alderaan"
};
    
console.log("Soy " + personData.name +" "+ personData.last_name +" tengo " + personData.age + " años y soy una princesa de " + personData.location + ".");







///

const lightsaber1 = {name: "Shoto de Yoda", price: 1500};
const lightsaber2 = {name: "Sable de Darth Vader", price: 2000};


const totalCost = lightsaber1.price + lightsaber2.price;
console.log("El costo total de los sables de luz es " + totalCost + " créditos.");








///

let priceBaseGlobal = 10000;

priceBaseGlobal = 25000;

const spaceship1 = {name: "Ala-X", priceBase: 50000, priceFinal: 60000};
const spaceship2 = {name: "Halcón Milenario", priceBase: 70000, priceFinal: 80000};



spaceship1.priceFinal = spaceship1.priceBase + priceBaseGlobal;
spaceship2.priceFinal = spaceship2.priceBase + priceBaseGlobal;
console.log("El precio final de la nave " + spaceship1.name + " es " + spaceship1.priceFinal + " créditos.");
console.log("El precio final de la nave " + spaceship2.name + " es " + spaceship2.priceFinal + " créditos.");