const prompt = require('prompt-sync')();

let valor1 = 0;
let valor2 = 1;

console.log("Sequência de Finobacci")

for (let i = 0; i < 10; i++) {
    console.log(valor1);
    let proximo = valor1 + valor2;
    valor1 = valor2;
    valor2 = proximo;

}