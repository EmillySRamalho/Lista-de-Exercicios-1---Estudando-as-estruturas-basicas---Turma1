const prompt = require('prompt-sync')();

let soma = 0
for (let i = 0; i < 5; i++){
    let numero = Number(prompt("Digite um valor: "))
    soma += numero;
}

console.log("A soma de todos os números é " + soma + ".");

