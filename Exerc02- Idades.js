const prompt = require('prompt-sync')();

let idade = Number(prompt("Digite a sua idade:"))

if (idade >= 0 && idade <= 11) {
    console.log("Você ainda é criança")
}

else if (idade >= 12 && idade <= 17){
    console.log("Você é adolescente")
}

else if (idade >= 18 && idade <= 59){
    console.log("Você é adulto.")
} 
else {
    console.log("Você é idoso");
}