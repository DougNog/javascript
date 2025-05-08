// Agora vamos para as atualidades. Crie um interface de streaming para venda, aluguel e compra de planos para acesso a sua plataforma. Tema Livre!

// Crie um interface de streaming para venda, aluguel e compra de planos para acesso a sua plataforma.

function vascoDAgama() {
    var preco = parseFloat(window.prompt('Qual é o preço do livro?'))
    var pago = parseFloat(window.prompt('Valor pago do livro:'))
    var troco = parseInt(pago) - parseInt(preco)
    window.alert(`Você comprou o livro que custou R$${preco.toFixed(2)} e pagou R$${pago.toFixed(2)}. O seu troco será de R$${troco.toFixed(2)}`)


}
  
 function vascoDAgama() {
    var preco = parseFloat(window.prompt('Qual é o preço do aluguel do livro?'))
    var pago = parseFloat(window.prompt('Valor pago do aluguel:'))
    var troco = parseInt(pago) - parseInt(preco)
    window.alert(`Você alugou o livro que custou R$${preco.toFixed(2)} e pagou R$${pago.toFixed(2)}. O seu troco será de R$${troco.toFixed(2)}`)
 }

 function vascoDAgama() {
    var preco = parseFloat(window.prompt('Qual é o preço do plano?'))
    var pago = parseFloat(window.prompt('Valor pago do plano:'))
    var troco = parseInt(pago) - parseInt(preco)
    window.alert(`Você comprou o plano que custou R$${preco.toFixed(2)} e pagou R$${pago.toFixed(2)}. O seu troco será de R$${troco.toFixed(2)}`)
}
