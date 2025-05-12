const prompt = require('prompt-sync')();

console.log("\nEscolha a operação:");
console.log("1 - Adição");
console.log("2 - Subtração");
console.log("3 - Multiplicação");
console.log("4 - Divisão");

let opcao = Number(prompt("Digite a opção desejada (1 a 4): "));
let numero = Number(prompt("Digite um número: "));

console.log("\nResultado da operação:\n");

for (let i = 1; i <= 10; i++) {
    switch (opcao) {
        case 1:
            console.log(`${numero} + ${i} = ${numero + i}`);
            break;
        case 2:
            console.log(`${numero} - ${i} = ${numero - i}`);
            break;
        case 3:
            console.log(`${numero} x ${i} = ${numero * i}`);
            break;
        case 4:
            console.log(`${numero} ÷ ${i} = ${(numero / i).toFixed(2)}`);
            
    }
}

