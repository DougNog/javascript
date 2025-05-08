//2. Verificação de Acesso a um Sistema
//Escreva um programa que verifique se um usuário tem acesso a um sistema com base em seu nome de usuário e senha.

let usuario = prompt("Digite seu nome de usuário: ");
let senha = prompt("Digite sua senha: ");

if (usuario === "admin" && senha === "admin") {
    alert("Acesso permitido!");
} else {
    alert("Acesso negado!");
}