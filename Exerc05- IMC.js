const prompt = require('prompt-sync')();

let altura = parseFloat(prompt("Qual a sua altura?  "))
let peso = parseFloat(prompt("Qual o seu peso?  "))

let imc = peso / (altura ** 2)

if (imc <= 18.5){
    console.log("Abaixo do peso")
}
else if (imc >= 18.6 && imc <= 24.9 ){
    console.log("Peso normal")
}
else if (imc >=25 && imc <= 29.9){
    console.log("Sobrepeso")
}
else {
    console.log("Obesidade")
}

console.log("Seu IMC é ", imc.toFixed(2))