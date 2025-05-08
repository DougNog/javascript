//7. Parque de Diversões
//Escreva um programa que calcule os valores de entrada e de opções para tipos de ingressos. Ao final representar os valores e tipo de ingressos.

let ingressos = [];

function adicionarIngresso() {
    let tipo = prompt("Digite o tipo do ingresso: ");
    let valor = parseFloat(prompt("Digite o valor do ingresso: "));
    ingressos.push({tipo, valor});
    alert("Ingresso adicionado com sucesso!");
}

function listarIngressos() {
    if (ingressos.length > 0) {
        let mensagem = "Lista de ingressos:\n";
        ingressos.forEach(ingresso => {
            mensagem += `Tipo: ${ingresso.tipo}, Valor: ${ingresso.valor} \n`;
        });
        alert(mensagem);
    } else {
        alert("A lista de ingressos está vazia!");
    }
}

function exibirMenu() {
    return prompt(
        "menu:\n" +
        "1 - Adicionar ingresso\n" +
        "2 - Listar ingressos\n" +
        "3 - Sair\n" +
        "Escolha uma opção:"
    );
}

let opcao = exibirMenu();

if (opcao !== "3") {
    if  (opcao === "1") {
        adicionarIngresso();
    } else if (opcao === "2") {
        listarIngressos();
    } else {
        alert("Opção inválida!");
    }
    opcao = exibirMenu();
}