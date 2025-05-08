// Criar uma interface para converter reais em dólares.

function vascoDAgama() {
    var reais = window.prompt("Digite o valor em reais:");
    var dolar = reais / 5.81;
    window.alert(`R$${reais} em dólares é US$${dolar.toFixed(2)}.`);
}
