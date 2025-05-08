// desafio 2

// mercadinho 
let produtos = [];
let quantidade = parseInt(prompt("Quantos produtos você deseja inserir:"));
for (let i = 0; i < quantidade; i++) {
    let produto = parseFloat(prompt(`Digite o valor do produto ${i + 1}:`));
    produtos.push(produto);
}

let soma = 0;
for (let i = 0; i < produtos.length; i++) {
    soma += produtos[i];
}

alert(`O valor total dos produtos é: ${soma}`);