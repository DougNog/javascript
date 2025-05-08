// Crie uma interface com botão para apresentar o antes e o depois. Deverá ser informado um número nessa caixa e ao clicar no botão depois de inserir a informação ele irá apresentar em uma janela que esse número possui um antecessor e sucessor.

function vascoDAgama() {
    var numero = window.prompt("Digite um número:");
    var antecessor = parseInt(numero) - 1;
    var sucessor = parseInt(numero) + 1;
    window.alert("Antecessor: " + antecessor + "\nNúmero: " + numero + "\nSucessor: " + sucessor);
}

