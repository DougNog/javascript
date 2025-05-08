//exemplo de variaves 

var nome = "Douglas";
var saldo = 1000;
var saque = 510;
var limite = 500;
var senha = 1234;
var senhaDigitada = 1234;


//verificar saldo

var saldo = saldo - saque;
console.log("Saldo atual: " + saldo);
if (saque > saldo) {
    console.log("Saldo insuficiente");
}
if (saque > saldo + limite) {
    console.log("Limite excedido");
}