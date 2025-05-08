// -------------------------------
// LISTA DE PIZZAS DISPONÍVEIS
// -------------------------------

// Array que armazena os objetos de cada pizza cadastrada
let pizzas = [
  { nome: "Margherita", ingredientes: "Molho de tomate, mussarela, manjericão", preco: 45.90 },
  { nome: "Calabresa", ingredientes: "Molho de tomate, mussarela, calabresa, cebola", preco: 52.50 },
  { nome: "Portuguesa", ingredientes: "Molho de tomate, mussarela, presunto, ovo, cebola, azeitona", preco: 58.75 }
];

// -------------------------------
// CONTROLE DO PEDIDO ATUAL
// -------------------------------

// Objeto que representa o pedido sendo feito no momento
let pedidoAtual = {
  itens: [], // Array que armazena as pizzas adicionadas ao pedido
  cliente: { // Objeto com informações do cliente
    nome: "",
    endereco: "",
    telefone: ""
  },
  total: 0 // Valor total do pedido
};

// -------------------------------
// FUNÇÕES GERAIS DE NAVEGAÇÃO
// -------------------------------

/**
 * Exibe uma seção do sistema (como cardápio ou pedidos) e oculta as outras.
 * @param {string} secaoId - ID da seção a ser exibida.
 */
function mostrarSecao(secaoId) {
  // Oculta todas as divs principais
  document.querySelectorAll('.container > div').forEach(div => {
    div.classList.add('hidden');
  });

  // Exibe a seção desejada
  document.getElementById(secaoId).classList.remove('hidden');

  // Atualiza os dados da tela, se necessário
  if (secaoId === 'cardapio') {
    atualizarCardapio();
  } else if (secaoId === 'pedidos') {
    atualizarListaPedidos();
  }
}

/**
 * Retorna ao menu principal.
 */
function mostrarMenu() {
  mostrarSecao('menu-principal');
}

// -------------------------------
// FUNÇÃO DE VALIDAÇÃO DO FORMULÁRIO DE NOVA PIZZA
// -------------------------------

/**
 * Valida os campos do formulário de cadastro de pizza.
 * Exibe mensagens de erro se houver problemas.
 * @returns {boolean} - true se todos os campos estiverem corretos
 */
function validarCampos() {
  let valido = true;

  const nome = document.getElementById('nome').value.trim();
  const ingredientes = document.getElementById('ingredientes').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);

  if (nome === '') {
    document.getElementById('nome-erro').textContent = 'Por favor, insira um nome para a pizza';
    valido = false;
  } else {
    document.getElementById('nome-erro').textContent = '';
  }

  if (ingredientes === '') {
    document.getElementById('ingredientes-erro').textContent = 'Por favor, insira os ingredientes';
    valido = false;
  } else {
    document.getElementById('ingredientes-erro').textContent = '';
  }

  if (isNaN(preco) || preco <= 0) {
    document.getElementById('preco-erro').textContent = 'Por favor, insira um preço válido';
    valido = false;
  } else {
    document.getElementById('preco-erro').textContent = '';
  }

  return valido;
}

// -------------------------------
// ADICIONAR NOVA PIZZA
// -------------------------------

/**
 * Cadastra uma nova pizza após validação.
 */
function adicionarPizza() {
  if (!validarCampos()) return;

  const nome = document.getElementById('nome').value.trim();
  const ingredientes = document.getElementById('ingredientes').value.trim();
  const preco = parseFloat(document.getElementById('preco').value);

  // Verifica se o nome da pizza já existe (case-insensitive)
  if (pizzas.some(p => p.nome.toLowerCase() === nome.toLowerCase())) {
    document.getElementById('cadastro-feedback').textContent = 'Já existe uma pizza com esse nome!';
    document.getElementById('cadastro-feedback').style.color = 'red';
    return;
  }

  // Adiciona nova pizza ao array
  pizzas.push({ nome, ingredientes, preco });

  // Limpa os campos do formulário
  document.getElementById('nome').value = '';
  document.getElementById('ingredientes').value = '';
  document.getElementById('preco').value = '';

  // Mostra feedback positivo
  document.getElementById('cadastro-feedback').textContent = 'Pizza cadastrada com sucesso!';
  document.getElementById('cadastro-feedback').style.color = 'green';

  // Atualiza a lista de pizzas na tela
  atualizarCardapio();
}

// -------------------------------
// ATUALIZAR CARDÁPIO
// -------------------------------

/**
 * Atualiza a lista de pizzas na tabela do cardápio.
 */
function atualizarCardapio() {
  const listaPizzas = document.getElementById('lista-pizzas');
  listaPizzas.innerHTML = ''; // Limpa o conteúdo anterior

  // Percorre o array de pizzas e cria uma linha <tr> para cada uma
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

// -------------------------------
// BUSCAR PIZZA NO CARDÁPIO
// -------------------------------

/**
 * Filtra pizzas pelo nome digitado no campo de busca.
 */
function buscarPizza() {
  const termo = document.getElementById('busca-pizza').value.toLowerCase();
  const linhas = document.querySelectorAll('#lista-pizzas tr');

  linhas.forEach(linha => {
    const nomePizza = linha.cells[0].textContent.toLowerCase();
    linha.style.display = nomePizza.includes(termo) ? '' : 'none';
  });
}

// -------------------------------
// REMOVER PIZZA
// -------------------------------

/**
 * Remove uma pizza do array com confirmação do usuário.
 * @param {number} index - Índice da pizza a ser removida.
 */
function removerPizza(index) {
  if (confirm(`Tem certeza que deseja remover a pizza ${pizzas[index].nome}?`)) {
    pizzas.splice(index, 1);
    atualizarCardapio();
    document.getElementById('cardapio-feedback').textContent = 'Pizza removida com sucesso!';
    document.getElementById('cardapio-feedback').style.color = 'green';

    // Atualiza pedidos, se a tela de pedidos estiver visível
    if (!document.getElementById('pedidos').classList.contains('hidden')) {
      atualizarListaPedidos();
    }
  }
}

// -------------------------------
// BUSCAR PIZZA PARA ALTERAR
// -------------------------------

/**
 * Localiza pizza por nome para alteração e preenche o formulário de edição.
 */
function buscarPizzaParaAlterar() {
  const termo = document.getElementById('busca-alterar-pizza').value.toLowerCase();
  const pizzaEncontrada = pizzas.find(p => p.nome.toLowerCase().includes(termo));

  const form = document.getElementById('form-alterar-pizza');

  if (pizzaEncontrada) {
    form.classList.remove('hidden');
    document.getElementById('novo-nome').value = pizzaEncontrada.nome;
    document.getElementById('novos-ingredientes').value = pizzaEncontrada.ingredientes;
    document.getElementById('novo-preco').value = pizzaEncontrada.preco;
    form.setAttribute('data-index', pizzas.indexOf(pizzaEncontrada));
    document.getElementById('busca-alterar-feedback').textContent = '';
  } else {
    form.classList.add('hidden');
    document.getElementById('busca-alterar-feedback').textContent = termo ? 'Pizza não encontrada' : '';
  }
}

// -------------------------------
// ALTERAR PIZZA
// -------------------------------

/**
 * Atualiza as informações de uma pizza já existente.
 */
function alterarPizza() {
  const form = document.getElementById('form-alterar-pizza');
  const index = parseInt(form.getAttribute('data-index'));

  if (isNaN(index)) return;

  const novoNome = document.getElementById('novo-nome').value.trim();
  const novosIngredientes = document.getElementById('novos-ingredientes').value.trim();
  const novoPreco = parseFloat(document.getElementById('novo-preco').value);

  if (!novoNome || !novosIngredientes || isNaN(novoPreco) || novoPreco <= 0) {
    alert('Por favor, preencha todos os campos corretamente');
    return;
  }

  pizzas[index] = { nome: novoNome, ingredientes: novosIngredientes, preco: novoPreco };

  document.getElementById('alterar-feedback').textContent = 'Pizza alterada com sucesso!';
  document.getElementById('alterar-feedback').style.color = 'green';

  atualizarCardapio();
  if (!document.getElementById('pedidos').classList.contains('hidden')) {
    atualizarListaPedidos();
  }
}

// -------------------------------
// SEÇÃO DE PEDIDOS
// -------------------------------

/**
 * Mostra todas as pizzas disponíveis para serem adicionadas ao carrinho de pedidos.
 */
function atualizarListaPedidos() {
  const lista = document.getElementById('lista-pizzas-disponiveis');
  lista.innerHTML = '';

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

    lista.appendChild(div);
  });

  atualizarResumoPedido();
}

/**
 * Adiciona uma pizza ao carrinho de pedidos.
 * @param {number} index - Índice da pizza no array.
 */
function adicionarAoCarrinho(index) {
  const pizza = pizzas[index];
  pedidoAtual.itens.push({ nome: pizza.nome, preco: pizza.preco });
  pedidoAtual.total = pedidoAtual.itens.reduce((sum, item) => sum + item.preco, 0);
  atualizarResumoPedido();
}

/**
 * Remove uma pizza do carrinho de pedidos.
 * @param {number} index - Índice do item no carrinho.
 */
function removerDoCarrinho(index) {
  pedidoAtual.itens.splice(index, 1);
  pedidoAtual.total = pedidoAtual.itens.reduce((sum, item) => sum + item.preco, 0);
  atualizarResumoPedido();
}

/**
 * Atualiza a visualização do resumo do pedido (carrinho).
 */
function atualizarResumoPedido() {
  const resumo = document.getElementById('resumo-pedido');
  const total = document.getElementById('total-pedido');

  resumo.innerHTML = '';

  if (pedidoAtual.itens.length === 0) {
    resumo.innerHTML = '<li class="vazio">Nenhum item adicionado</li>';
  } else {
    pedidoAtual.itens.forEach((item, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <span>${item.nome} - R$ ${item.preco.toFixed(2)}</span>
        <button onclick="removerDoCarrinho(${index})" class="btn-remover-item">
          <i class="fas fa-times"></i>
        </button>
      `;
      resumo.appendChild(li);
    });
  }

  total.textContent = pedidoAtual.total.toFixed(2);
}

// -------------------------------
// FINALIZAR PEDIDO
// -------------------------------

/**
 * Valida e finaliza o pedido, exibindo um alerta com o resumo.
 */
function finalizarPedido() {
  const nomeCliente = document.getElementById('nome-cliente').value.trim();
  const enderecoCliente = document.getElementById('endereco-cliente').value.trim();
  const telefoneCliente = document.getElementById('telefone-cliente').value.trim();

  if (pedidoAtual.itens.length === 0) {
    alert('Adicione pelo menos uma pizza ao pedido!');
    return;
  }

  if (!nomeCliente || !enderecoCliente || !telefoneCliente) {
    alert('Por favor, preencha todas as informações do cliente');
    return;
  }

  pedidoAtual.cliente = { nome: nomeCliente, endereco: enderecoCliente, telefone: telefoneCliente };

  alert(`Pedido finalizado com sucesso!\n\nCliente: ${pedidoAtual.cliente.nome}\nTotal: R$ ${pedidoAtual.total.toFixed(2)}\n\nObrigado pela preferência!`);

  // Reinicia o pedido atual
  pedidoAtual = {
    itens: [],
    cliente: {
      nome: "",
      endereco: "",
      telefone: ""
    },
    total: 0
  };

  // Limpa os campos do formulário do cliente
  document.getElementById('nome-cliente').value = '';
  document.getElementById('endereco-cliente').value = '';
  document.getElementById('telefone-cliente').value = '';

  atualizarResumoPedido();
}

// -------------------------------
// INICIALIZAÇÃO AO CARREGAR A PÁGINA
// -------------------------------

/**
 * Quando a página carregar, mostra o menu principal.
 */
document.addEventListener('DOMContentLoaded', () => {
  mostrarSecao('menu-principal');
});
