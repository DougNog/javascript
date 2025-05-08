function verificarPlaca() {
    const placa = document.getElementById('placa').value.toUpperCase();
    const resultado = document.getElementById('resultado');

    if (placa.startsWith("ABC")) {
        resultado.textContent = "Acesso liberado: Sem cobrança.";
    } else {
        resultado.textContent = "Acesso cobrado: R$ 1,00.";
    }
}