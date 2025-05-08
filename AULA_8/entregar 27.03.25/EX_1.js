// 1. ATIVIDADE 1 - CAFETERIA CAFÉ EXPRESSO
//O Café Expresso oferece um menu com as seguintes opções:

//Café Expresso: R$ 5,00
//Cappuccino: R$ 8,00
//Chocolate Quente: R$ 7,50
//Chá: R$ 4,00

//Crie um programa que:
//● Exiba o menu para o cliente.
//● Receba a opção escolhida pelo cliente.
//● Calcule o valor total do pedido.
//● Exiba o pedido e o valor total para o cliente.

// 1. ATIVIDADE 1 - CAFETERIA CAFÉ EXPRESSO
// O Café Expresso oferece um menu com as seguintes opções:
// Café Expresso: R$ 5,00
// Cappuccino: R$ 8,00
// Chocolate Quente: R$ 7,50
// Chá: R$ 4,00

// 1. ATIVIDADE 1 - CAFETERIA CAFÉ EXPRESSO
// O Café Expresso oferece um menu com as seguintes opções:
// Café Expresso: R$ 5,00
// Cappuccino: R$ 8,00
// Chocolate Quente: R$ 7,50
// Chá: R$ 4,00

function cafeteria() {
    // Exibe o menu para o cliente
    let menu = "Bem-vindo à Cafeteria Café Expresso!\n";
    menu += "Escolha uma das opções abaixo:\n";
    menu += "1 - Café Expresso (R$ 5,00)\n";
    menu += "2 - Cappuccino (R$ 8,00)\n";
    menu += "3 - Chocolate Quente (R$ 7,50)\n";
    menu += "4 - Chá (R$ 4,00)\n";

    let opcao = parseInt(window.prompt(menu)); // Recebe a opção escolhida pelo cliente
    let pedido = "";
    let valor = 0;

    // Verifica a opção escolhida
    if (opcao === 1) {
        pedido = "Café Expresso";
        valor = 5.00;
    } else if (opcao === 2) {
        pedido = "Cappuccino";
        valor = 8.00;
    } else if (opcao === 3) {
        pedido = "Chocolate Quente";
        valor = 7.50;
    } else if (opcao === 4) {
        pedido = "Chá";
        valor = 4.00;
    } else {
        window.alert("Opção inválida. Por favor, escolha uma opção válida.");
        return; // Encerra a função se a opção for inválida
    }

    // Exibe o pedido e o valor total para o cliente
    window.alert(`Você escolheu: ${pedido}\nValor total: R$ ${valor.toFixed(2)}`);
}

// Chama a função para iniciar o programa
cafeteria();