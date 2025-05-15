// Variáveis globais
let pizzaMenu = []; // Lista para armazenar as pizzas disponíveis no cardápio
let pedido = []; // Lista para armazenar os itens do pedido

// Função para carregar as pizzas no cardápio
function carregarCardapio() {
  // Exemplo de pizzas (essa lista pode vir de uma API ou banco de dados)
  pizzaMenu = [
    { id: 1, nome: "Margarita", descricao: "Molho de tomate, queijo e manjericão", preco: 25.00 },
    { id: 2, nome: "Calabresa", descricao: "Calabresa, queijo e molho de tomate", preco: 30.00 },
    { id: 3, nome: "Peperoni", descricao: "Peperoni, queijo e molho de tomate", preco: 35.00 },
    { id: 4, nome: "Vegetariana", descricao: "Legumes e queijo", preco: 28.00 }
  ];

  // Renderizando as pizzas no HTML
  const cardapioContainer = document.getElementById('cardapio');
  pizzaMenu.forEach(pizza => {
    const pizzaCard = document.createElement('div');
    pizzaCard.classList.add('pizza-item');
    
    pizzaCard.innerHTML = `
      <h4>${pizza.nome}</h4>
      <p>${pizza.descricao}</p>
      <p class="preco">R$ ${pizza.preco.toFixed(2)}</p>
      <button class="btn-adicionar" onclick="adicionarPizza(${pizza.id})">Adicionar</button>
    `;
    
    cardapioContainer.appendChild(pizzaCard);
  });
}

// Função para adicionar uma pizza ao pedido
function adicionarPizza(pizzaId) {
  // Busca a pizza pelo id
  const pizzaSelecionada = pizzaMenu.find(pizza => pizza.id === pizzaId);
  
  // Verifica se a pizza foi encontrada no cardápio
  if (pizzaSelecionada) {
    // Adiciona a pizza ao pedido
    pedido.push(pizzaSelecionada);
    
    // Atualiza o resumo do pedido
    atualizarResumoPedido();
  }
}

// Função para remover um item do pedido
function removerItemPedido(pizzaId) {
  // Filtra o pedido, removendo a pizza com o id passado
  pedido = pedido.filter(pizza => pizza.id !== pizzaId);
  
  // Atualiza o resumo do pedido
  atualizarResumoPedido();
}

// Função para atualizar o resumo do pedido
function atualizarResumoPedido() {
  const resumoPedido = document.getElementById('resumo-pedido');
  resumoPedido.innerHTML = ''; // Limpa o conteúdo atual do resumo

  // Adiciona os itens do pedido ao resumo
  pedido.forEach(pizza => {
    const pizzaItem = document.createElement('li');
    pizzaItem.innerHTML = `
      <span>${pizza.nome}</span>
      <span class="preco">R$ ${pizza.preco.toFixed(2)}</span>
      <button class="btn-remover-item" onclick="removerItemPedido(${pizza.id})">Remover</button>
    `;
    resumoPedido.appendChild(pizzaItem);
  });

  // Exibe uma mensagem caso o pedido esteja vazio
  if (pedido.length === 0) {
    resumoPedido.innerHTML = '<li class="vazio">Nenhuma pizza no pedido.</li>';
  }

  // Atualiza o total do pedido
  const totalPedido = pedido.reduce((total, pizza) => total + pizza.preco, 0);
  const totalPedidoElement = document.getElementById('total-pedido');
  totalPedidoElement.textContent = `Total: R$ ${totalPedido.toFixed(2)}`;
}

// Função para finalizar o pedido
function finalizarPedido() {
  // Verifica se o pedido está vazio antes de finalizar
  if (pedido.length === 0) {
    alert("Seu pedido está vazio! Adicione pizzas ao pedido.");
    return;
  }

  // Simulação de finalização do pedido (aqui você poderia enviar os dados para um servidor, por exemplo)
  alert("Pedido finalizado com sucesso!");
  
  // Limpa o pedido após finalizar
  pedido = [];
  atualizarResumoPedido();
}

// Função para exibir informações do cliente
function exibirInformacoesCliente() {
  const nomeCliente = document.getElementById('nome-cliente').value;
  const enderecoCliente = document.getElementById('endereco-cliente').value;

  // Verifica se os campos obrigatórios foram preenchidos
  if (!nomeCliente || !enderecoCliente) {
    alert("Por favor, preencha todas as informações do cliente.");
    return;
  }

  // Exibe uma mensagem com as informações do cliente
  alert(`Informações do cliente:\nNome: ${nomeCliente}\nEndereço: ${enderecoCliente}`);
}

// Evento de carregamento da página para exibir o cardápio
document.addEventListener('DOMContentLoaded', function() {
  carregarCardapio();
  
  // Configura o evento de clique para o botão de finalizar pedido
  const btnFinalizar = document.getElementById('btn-finalizar');
  btnFinalizar.addEventListener('click', finalizarPedido);

  // Configura o evento de clique para o botão de exibir informações do cliente
  const btnInformacoesCliente = document.getElementById('btn-exibir-info');
  btnInformacoesCliente.addEventListener('click', exibirInformacoesCliente);
});
