let preco = parseFloat(window.prompt("Qual é o preço do produto?"));
let porc = parseFloat(window.prompt("Qual é a porcentagem de desconto?"));
let valor = preco * porc / 100;
let total = preco - valor;
let res = document.getElementById("result");

if (res) {
    res.innerHTML = `<p>O produto custa R$${preco.toFixed(2)}.</p>`;
    res.innerHTML += `<p>Um desconto de ${porc}% sobre ele será de R$${valor.toFixed(2)}.</p>`;
    res.innerHTML += `<p>O valor final a ser pago será de R$${total.toFixed(2)}.</p>`;
} else {
    console.error("Elemento com ID 'result' não encontrado.");
}