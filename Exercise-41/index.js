const readline = require('readline');

function rollDice() {
    const result = Math.floor(Math.random() * 6) + 1;
    switch (result) {
        case 1:
            console.log("Sacaste un 1: ¡Mala suerte! No puedes avanzar.");
            break;
        case 2:
            console.log("Sacaste un 2: Puedes avanzar muy poco.");
            break;
        case 3:
            console.log("Sacaste un 3: Aun avanzas.");
            break;
        case 4:
            console.log("Sacaste un 4: ¡Bien hecho! Puedes avanzar más.");
            break;
        case 5:
            console.log("Sacaste un 5: ¡Casi perfecto! Puedes avanzar mucho.");
            break;
        case 6:
            console.log("Sacaste un 6: ¡Excelente! Puedes avanzar al máximo.");
            break;
        default:
            console.log("Error en la tirada.");
    }
}

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function askToRoll() {
    rl.question('¿Quieres tirar el dado? (s/n): ', (answer) => {
        if (answer.toLowerCase() === 's') {
            rollDice();
            askToRoll(); // vuelve a preguntar
        } else {
            console.log('¡Juego terminado!');
            rl.close();
        }
    });
}

askToRoll();