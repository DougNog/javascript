//3. Verificação de Votação
//Escreva um programa que verifique se uma pessoa pode votar com base na sua idade e nacionalidade.

let idade = parseInt(prompt("Digite sua idade: "));
let nacionalidade = prompt("Digite sua nacionalidade: ");

if (idade >= 16 && nacionalidade === "brasileira") {
    alert("Você pode votar!");
} else {
    alert("Você não pode votar!");
}