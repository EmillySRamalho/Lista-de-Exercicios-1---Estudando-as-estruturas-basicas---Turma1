const prompt = require('prompt-sync')();

console.log ("1 - Harry Potter e a Pedra Filosofal")
console.log ("2 - Harry Potter e a Câmara Secreta")
console.log ("3 - Harry Potter e o Prisioneiro de Azkaban")

let filme = Number(prompt("Escolha um filme: "))


switch (filme) {
    case 1: 
        console.log("Uma ótima escolha! Prepare-se para embarcar na magia de 'A Pedra Filosofal', onde tudo começa.");
        break;
    case 2: 
        console.log("Mistério e aventura te aguardam em 'A Câmara Secreta', um clássico cheio de segredos.");
        break;
    case 3: 
        console.log("O Prisioneiro de Azkaban é um dos capítulos mais sombrios e emocionantes da saga. Uma excelente escolha!");
        break;
    default:
        console.log("Filme não encontrado.")
    
}

