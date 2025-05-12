const prompt = require('prompt-sync')();

let QuantidadesDeMaças = Number(prompt("Quantas maçãs deseja levar? "))
let totalDeCompras

if (QuantidadesDeMaças < 12){
    totalDeCompras = QuantidadesDeMaças * 0.30
}
else {
    totalDeCompras = QuantidadesDeMaças * 0.25
}

console.log("O valor total da compra é: R$ " + totalDeCompras.toFixed(2))