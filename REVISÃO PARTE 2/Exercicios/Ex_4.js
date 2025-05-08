//4. Verificação de Desconto
//Escreva um programa que verifique se um cliente tem direito a um desconto com base na quantidade de itens comprados e se é um cliente VIP.

let quantidadeItens = parseInt(prompt("Digite a quantidade de itens comprados: "));
let clienteVip = prompt("O cliente é VIP? (sim ou não)");

if (quantidadeItens <= 10 && clienteVip === "sim") {
    alert("Você tem direito a um desconto!");
} else {
    alert("Você não tem direito a um desconto!");
}
