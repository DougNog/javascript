//6. Loja de Móveis
//Escreva um programa para representar um móvel com propriedades como tipo (cadeira, mesa, etc.), material, cor e preço. Em seguida, crie uma função para adicionar novos móveis a uma lista.

let moveis = [];

function adicionarMovel() {
    let tipo = prompt("Digite o tipo do móvel: ");
    let material = prompt("Digite o material do móvel: ");
    let cor = prompt("Digite a cor do móvel: ");
    let preco = parseFloat(prompt("Digite o preço do móvel: "));
    moveis.push({tipo, material, cor, preco});
    alert("Móvel adicionado com sucesso!");
}

function listarMoveis() {
    if (moveis.length > 0) {
        let mensagem = "Lista de móveis:\n";
        moveis.forEach(movel => {
            mensagem += `Tipo: ${movel.tipo}, Material: ${movel.material}, Cor: ${movel.cor}, Preço: ${movel.preco} \n`;
        });
        alert(mensagem);
    } else {
        alert("A lista de móveis está vazia!");
    }
}

function exibirMenu() {
    return prompt(
        "menu:\n" +
        "1 - Adicionar móvel\n" +
        "2 - Listar móveis\n" +
        "3 - Sair\n" +
        "Escolha uma opção:"
    );
}

let opcao = exibirMenu();

if (opcao !== "3") {
    if  (opcao === "1") {
        adicionarMovel();
    } else if (opcao === "2") {
        listarMoveis();
    } else {
        alert("Opção inválida!");
    }
    opcao = exibirMenu();
}

