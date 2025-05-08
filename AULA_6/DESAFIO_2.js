// Crie uma interface com um título e um botão. Ao pressionar o botão deverá apresentar uma mensagem perguntando Nome e Idade e ao finalizar exibir em outra janela a junção das duas informações.

function vascoDAgama() {
    var nome = window.prompt("Digite seu nome:");
    var idade = window.prompt("Digite sua idade:");
    window.alert("Nome: " + nome + "\nIdade: " + idade);
}
