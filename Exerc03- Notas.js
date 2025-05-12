const prompt = require('prompt-sync')();

let notaAluno = parseFloat(prompt("Digite a nota do aluno: "))

if (notaAluno >= 7){
    console.log("Aprovado")
}
else if (notaAluno >=4 && notaAluno < 7 ){
    console.log("Recuperação")
}
else {
    console.log("Reprovado")
}