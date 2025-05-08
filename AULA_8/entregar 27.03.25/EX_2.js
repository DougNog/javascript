function verificarEstoque() {
    const quantidade = parseInt(document.getElementById('quantidade').value) || 0;
    const mensagem = document.getElementById('mensagem');

    if (quantidade < 30) {
        mensagem.textContent = "Estoque Baixo";
        mensagem.className = 'low-stock';
    } else if (quantidade > 100) {
        mensagem.textContent = "Estoque Bom";
        mensagem.className = 'good-stock';
    } else {
        mensagem.textContent = "Estoque Regular";
        mensagem.className = '';
    }
}