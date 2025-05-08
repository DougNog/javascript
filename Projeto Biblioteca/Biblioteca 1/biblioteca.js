let biblioteca = [];

function adicionarLivro() {
    let titulo = prompt("Digite o título do livro: ");
    let autor = prompt("Digite o autor do livro: ");
    let ano = parseInt(prompt("Digite o ano de publicação livro: "));
    biblioteca.push({titulo, autor, ano});
    alert("Livro adicionado com sucesso!");
}

function listarLivros() {
    if (biblioteca.length > 0) {
        let mensagem = "Lista de livros na biblioteca:\n";
        biblioteca.forEach(livro => {
            mensagem += `Título: ${livro.titulo}, Autor: ${livro.autor}, Ano: ${livro.ano} \n`;
        });
        alert(mensagem);
    } else {
        alert("A biblioteca está vazia!");
    }
}

function exibirMenu() {
    return prompt(
        "menu:\n" +
        "1 - Adicionar livro\n" +
        "2 - Buscar livro\n" +
        "3 - Listar livros\n" +
        "4 - Sair\n" +
        "Escolha uma opção:"
    );
}

exibirMenu();
adicionarLivro
exibirMenu();
listarLivros
exibirMenu();