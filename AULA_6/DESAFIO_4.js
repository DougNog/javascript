// Criar uma interface para Calcular um troco, na janela deverá apresentar uma mensagem para informar o produto que deseja comprar, na próxima deverá informar o valor e na próxima o quanto o cliente pagou pelo produto. Na próxima mensagem deverá apresentar o valor pago e o troco pela compra.


function vascoDAgama() {
    var produto = window.prompt("Digite o produto que deseja comprar:");
    var valor = parseFloat(window.prompt("Digite o valor do produto:"));
    var pago = parseFloat(window.prompt("Digite o valor pago pelo produto:"));
    var troco = pago - valor;
    window.alert("Produto: " + produto + "\nValor: R$" + valor.toFixed(2) + "\nPago: R$" + pago.toFixed(2) + "\nTroco: R$" + troco.toFixed(2));
}