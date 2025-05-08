//1. Verificação de Maioridade e Habilitação
//Escreva um programa que verifique se uma pessoa é maior de idade e possui habilitação para dirigir.

let idade = parseInt(prompt("Digite sua idade: "));
let habilitacao = prompt("Possui habilitação? (S/N): ");

if (idade >= 18 && habilitacao === "S") {
    alert("Você está apto a dirigir!");
} else {
    alert("Você não está apto a dirigir!");
}
