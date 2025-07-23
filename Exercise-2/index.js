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

const sable1 = {nombre: "Shoto de Yoda", precio: 1500};
const sable2 = {nombre: "Sable de Darth Vader", precio: 2000};


const totalCost = sable1.precio + sable2.precio;
console.log("El costo total de los sables de luz es " + totalCost + " créditos.");








///

let precioBaseGlobal = 10000;

precioBaseGlobal = 25000;

const nave1 = {nombre: "Ala-X", precioBase: 50000, precioFinal: 60000};
const nave2 = {nombre: "Halcón Milenario", precioBase: 70000, precioFinal: 80000};



nave1.precioFinal = nave1.precioBase + precioBaseGlobal;
nave2.precioFinal = nave2.precioBase + precioBaseGlobal;
console.log("El precio final de la nave " + nave1.nombre + " es " + nave1.precioFinal + " créditos.");
console.log("El precio final de la nave " + nave2.nombre + " es " + nave2.precioFinal + " créditos.");