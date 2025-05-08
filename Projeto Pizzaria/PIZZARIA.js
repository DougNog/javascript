// Array para armazenar as pizzas cadastradas
let pizzas = [
  { nome: "Margherita", ingredientes: "Molho de tomate, mussarela, manjericão", preco: 45.90 },
  { nome: "Calabresa", ingredientes: "Molho de tomate, mussarela, calabresa, cebola", preco: 52.50 },
  { nome: "Portuguesa", ingredientes: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona", preco: 58.75 }
];

// Variáveis para controle do pedido atual
let pedidoAtual = {
  itens: [],
  cliente: {
      nome: "",
      endereco: "",
      telefone: ""
  },
  total: 0
};

// Função para mostrar uma seção específica e esconder as outras
function mostrarSecao(secaoId) {
  // Esconder todas as seções
  document.querySelectorAll('.container > div').forEach(div => {
      div.classList.add('hidden');
  });
  
  // Mostrar a seção desejada
  document.getElementById(secaoId).classList.remove('hidden');
  
  // Atualizar conteúdo dinâmico conforme a seção
  if (secaoId === 'cardapio') {
      atualizarCardapio();
  } else if (secaoId === 'pedidos') {
      atualizarListaPedidos();
  }
}

// Função para voltar ao menu principal
function mostrarMenu() {
  mostrarSecao('menu-principal');
}

// Função para validar os campos do formulário
function validarCampos() {
  let valido = true;
  
  // Validar nome
  const nome = document.getElementById('nome').value.trim();
  if (nome === '') {
      document.getElementById('nome-erro').textContent = 'Por favor, insira um nome para a pizza';
      valido = false;
  } else {
      document.getElementById('nome-erro').textContent = '';
  }
  
  // Validar ingredientes
  const ingredientes = document.getElementById('ingredientes').value.trim();
  if (ingredientes === '') {
      document.getElementById('ingredientes-erro').textContent = 'Por favor, insira os ingredientes';
      valido = false;
  } else {
      document.getElementById('ingredientes-erro').textContent = '';
  }
  
  // Validar preço
  const preco = parseFloat(document.getElementById('preco').value);
  if (isNaN(preco) || preco <= 0) {
      document.getElementById('preco-erro').textContent = 'Por favor, insira um preço válido';
      valido = false;
  } else {
      document.getElementById('preco-erro').textContent = '';
  }
  
  return valido;
}

// Função para adicionar uma nova pizza
function adicionarPizza() {
  if (!validarCampos()) return;
  
  const nome = document.getElementById('nome').value.trim();
  const ingredientes = document.getElementById('ingredientes').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);
  
  // Verificar se pizza já existe
  if (pizzas.some(pizza => pizza.nome.toLowerCase() === nome.toLowerCase())) {
      document.getElementById('cadastro-feedback').textContent = 'Já existe uma pizza com esse nome!';
      document.getElementById('cadastro-feedback').style.color = 'red';
      return;
  }
  
  // Adicionar nova pizza
  pizzas.push({ nome, ingredientes, preco });
  
  // Limpar campos
  document.getElementById('nome').value = '';
  document.getElementById('ingredientes').value = '';
  document.getElementById('preco').value = '';
  
  // Feedback de sucesso
  document.getElementById('cadastro-feedback').textContent = 'Pizza cadastrada com sucesso!';
  document.getElementById('cadastro-feedback').style.color = 'green';
  
  // Atualizar cardápio
  atualizarCardapio();
}

// Função para atualizar a lista de pizzas no cardápio
function atualizarCardapio() {
  const listaPizzas = document.getElementById('lista-pizzas');
  listaPizzas.innerHTML = '';
  
  pizzas.forEach((pizza, index) => {
      const tr = document.createElement('tr');
      
      tr.innerHTML = `
          <td>${pizza.nome}</td>
          <td>${pizza.ingredientes}</td>
          <td>R$ ${pizza.preco.toFixed(2)}</td>
          <td>
              <button onclick="removerPizza(${index})" class="btn-remover">
                  <i class="fas fa-trash"></i> Remover
              </button>
          </td>
      `;
      
      listaPizzas.appendChild(tr);
  });
}

// Função para buscar pizza no cardápio
function buscarPizza() {
  const termo = document.getElementById('busca-pizza').value.toLowerCase();
  const linhas = document.querySelectorAll('#lista-pizzas tr');
  
  linhas.forEach(linha => {
      const nomePizza = linha.cells[0].textContent.toLowerCase();
      if (nomePizza.includes(termo)) {
          linha.style.display = '';
      } else {
          linha.style.display = 'none';
      }
  });
}

// Função para remover pizza
function removerPizza(index) {
  if (confirm(`Tem certeza que deseja remover a pizza ${pizzas[index].nome}?`)) {
      pizzas.splice(index, 1);
      atualizarCardapio();
      document.getElementById('cardapio-feedback').textContent = 'Pizza removida com sucesso!';
      document.getElementById('cardapio-feedback').style.color = 'green';
      
      // Atualizar também a lista de pedidos se estiver visível
      if (!document.getElementById('pedidos').classList.contains('hidden')) {
          atualizarListaPedidos();
      }
  }
}

// Função para buscar pizza para alteração
function buscarPizzaParaAlterar() {
  const termo = document.getElementById('busca-alterar-pizza').value.toLowerCase();
  const pizzaEncontrada = pizzas.find(pizza => pizza.nome.toLowerCase().includes(termo));
  
  if (pizzaEncontrada) {
      document.getElementById('form-alterar-pizza').classList.remove('hidden');
      document.getElementById('novo-nome').value = pizzaEncontrada.nome;
      document.getElementById('novos-ingredientes').value = pizzaEncontrada.ingredientes;
      document.getElementById('novo-preco').value = pizzaEncontrada.preco;
      
      // Armazenar o índice da pizza sendo editada em um atributo personalizado
      document.getElementById('form-alterar-pizza').setAttribute('data-index', pizzas.indexOf(pizzaEncontrada));
      
      document.getElementById('busca-alterar-feedback').textContent = '';
  } else {
      document.getElementById('form-alterar-pizza').classList.add('hidden');
      document.getElementById('busca-alterar-feedback').textContent = termo ? 'Pizza não encontrada' : '';
  }
}

// Função para alterar pizza
function alterarPizza() {
  const formAlterar = document.getElementById('form-alterar-pizza');
  const index = parseInt(formAlterar.getAttribute('data-index'));
  
  if (isNaN(index)) return;
  
  const novoNome = document.getElementById('novo-nome').value.trim();
  const novosIngredientes = document.getElementById('novos-ingredientes').value.trim();
  const novoPreco = parseFloat(document.getElementById('novo-preco').value);
  
  // Validações básicas
  if (!novoNome || !novosIngredientes || isNaN(novoPreco) || novoPreco <= 0) {
      alert('Por favor, preencha todos os campos corretamente');
      return;
  }
  
  // Atualizar pizza
  pizzas[index] = {
      nome: novoNome,
      ingredientes: novosIngredientes,
      preco: novoPreco
  };
  
  // Feedback
  document.getElementById('alterar-feedback').textContent = 'Pizza alterada com sucesso!';
  document.getElementById('alterar-feedback').style.color = 'green';
  
  // Atualizar exibições
  atualizarCardapio();
  if (!document.getElementById('pedidos').classList.contains('hidden')) {
      atualizarListaPedidos();
  }
}

// Funções para a seção de pedidos
function atualizarListaPedidos() {
  const listaPizzas = document.getElementById('lista-pizzas-disponiveis');
  listaPizzas.innerHTML = '';
  
  pizzas.forEach((pizza, index) => {
      const div = document.createElement('div');
      div.className = 'item-pizza';
      
      div.innerHTML = `
          <div class="info-pizza">
              <h4>${pizza.nome}</h4>
              <p>${pizza.ingredientes}</p>
              <p class="preco">R$ ${pizza.preco.toFixed(2)}</p>
          </div>
          <button onclick="adicionarAoCarrinho(${index})" class="btn-adicionar">
              <i class="fas fa-plus"></i> Adicionar
          </button>
      `;
      
      listaPizzas.appendChild(div);
  });
  
  // Atualizar resumo do pedido
  atualizarResumoPedido();
}

function adicionarAoCarrinho(index) {
  const pizza = pizzas[index];
  pedidoAtual.itens.push({
      nome: pizza.nome,
      preco: pizza.preco
  });
  
  // Atualizar total
  pedidoAtual.total = pedidoAtual.itens.reduce((sum, item) => sum + item.preco, 0);
  
  atualizarResumoPedido();
}

function removerDoCarrinho(index) {
  pedidoAtual.itens.splice(index, 1);
  
  // Atualizar total
  pedidoAtual.total = pedidoAtual.itens.reduce((sum, item) => sum + item.preco, 0);
  
  atualizarResumoPedido();
}

function atualizarResumoPedido() {
  const resumoPedido = document.getElementById('resumo-pedido');
  const totalPedido = document.getElementById('total-pedido');
  
  resumoPedido.innerHTML = '';
  
  if (pedidoAtual.itens.length === 0) {
      resumoPedido.innerHTML = '<li class="vazio">Nenhum item adicionado</li>';
  } else {
      pedidoAtual.itens.forEach((item, index) => {
          const li = document.createElement('li');
          li.innerHTML = `
              <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
              <button onclick="removerDoCarrinho(${index})" class="btn-remover-item">
                  <i class="fas fa-times"></i>
              </button>
          `;
          resumoPedido.appendChild(li);
      });
  }
  
  totalPedido.textContent = pedidoAtual.total.toFixed(2);
}

function finalizarPedido() {
  // Obter informações do cliente
  const nomeCliente = document.getElementById('nome-cliente').value.trim();
  const enderecoCliente = document.getElementById('endereco-cliente').value.trim();
  const telefoneCliente = document.getElementById('telefone-cliente').value.trim();
  
  // Validar pedido
  if (pedidoAtual.itens.length === 0) {
      alert('Adicione pelo menos uma pizza ao pedido!');
      return;
  }
  
  if (!nomeCliente || !enderecoCliente || !telefoneCliente) {
      alert('Por favor, preencha todas as informações do cliente');
      return;
  }
  
  // Atualizar dados do cliente
  pedidoAtual.cliente = {
      nome: nomeCliente,
      endereco: enderecoCliente,
      telefone: telefoneCliente
  };
  
  // Simular envio do pedido (em uma aplicação real, seria uma chamada AJAX)
  alert(`Pedido finalizado com sucesso!\n\nCliente: ${pedidoAtual.cliente.nome}\nTotal: R$ ${pedidoAtual.total.toFixed(2)}\n\nObrigado pela preferência!`);
  
  // Limpar pedido
  pedidoAtual = {
      itens: [],
      cliente: {
          nome: "",
          endereco: "",
          telefone: ""
      },
      total: 0
  };
  
  // Limpar campos do cliente
  document.getElementById('nome-cliente').value = '';
  document.getElementById('endereco-cliente').value = '';
  document.getElementById('telefone-cliente').value = '';
  
  // Atualizar exibição
  atualizarResumoPedido();
}

// Inicialização
document.addEventListener('DOMContentLoaded', () => {
  mostrarSecao('menu-principal');
});