//8. Streaming
//Escreva um programa que apresente as opções de compra de serviços de streaming e apresente os valores de compra com o plano incluso.

let streaming = [];

function adicionarStreaming() {
    let tipo = prompt("Digite o tipo do streaming: ");
    let valor = parseFloat(prompt("Digite o valor do streaming: "));
    streaming.push({tipo, valor});
    alert("Streaming adicionado com sucesso!");
}

function listarStreaming() {
    if (streaming.length > 0) {
        let mensagem = "Lista de streaming:\n";
        streaming.forEach(stream => {
            mensagem += `Tipo: ${stream.tipo}, Valor: ${stream.valor} \n`;
        });
        alert(mensagem);
    } else {
        alert("A lista de streaming está vazia!");
    }
}

function exibirMenu() {
    return prompt(
        "menu:\n" +
        "1 - Adicionar streaming\n" +
        "2 - Listar streaming\n" +
        "3 - Sair\n" +
        "Escolha uma opção:"
    );
}

let opcao = exibirMenu();

if (opcao !== "3") {
    if  (opcao === "1") {
        adicionarStreaming();
    } else if (opcao === "2") {
        listarStreaming();
    } else {
        alert("Opção inválida!");
    }
    opcao = exibirMenu();
}