function calcularPreco() {
    const codigo = parseInt(document.getElementById('codigo').value);
    const preco = parseFloat(document.getElementById('preco').value);
    const resultado = document.getElementById('resultado');

    if (isNaN(codigo) || isNaN(preco)) {
        resultado.textContent = "Por favor, insira valores válidos.";
        return;
    }

    if (codigo === 1 || codigo === 10) {
        const precoFinal = preco * 1.10; // Aumento de 10%
        resultado.textContent = `Preço final com aumento: R$ ${precoFinal.toFixed(2)}`;
    } else {
        resultado.textContent = `Preço final sem aumento: R$ ${preco.toFixed(2)}`;
    }
}