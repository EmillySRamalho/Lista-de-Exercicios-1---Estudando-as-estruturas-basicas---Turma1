const prompt = require('prompt-sync')();

let A = Number(prompt("Digite o valor para A: "));
let B = Number(prompt("Digite o valor para B: "));
let C = Number(prompt("Digite o valor para C: "));

if (A < B + C && B < A + C && C < A + B) {
    if (A === B && B === C) {
        console.log("Triângulo equilátero.");
    } else if (A === B || A === C || B === C) {
        console.log("Triângulo isósceles.");
    } else {
        console.log("Triângulo escaleno.");
    }
} else {
    console.log("Os valores não formam um triângulo.");
}
