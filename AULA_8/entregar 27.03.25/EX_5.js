function rastrearPedido() {
    const sigla = document.getElementById('sigla').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    const localizacoes = {
        AB: "SP",
        CD: "RJ",
        EF: "MG"
    };

    resultado.textContent = localizacoes[sigla] 
        ? `O produto está localizado em: ${localizacoes[sigla]}` 
        : "Sigla inválida. Tente novamente.";
}