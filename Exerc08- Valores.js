const prompt = require('prompt-sync')();

let valor1 = Number(prompt("Digite o valor 1: "))
let valor2 = Number(prompt("Digite o valor 2: "))

if (valor1 === valor2) {
    console.log("Os valores são iguais. Por favor, digite valores diferentes.");
} else if (valor1 < valor2) {
    console.log("Valores em ordem crescente:", valor1, ",", valor2);
} else {
    console.log("Valores em ordem crescente:", valor2, ",", valor1);
}
