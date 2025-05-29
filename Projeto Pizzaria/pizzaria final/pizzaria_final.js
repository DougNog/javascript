// !===========================
// !Dados principais da pizzaria
// !===========================

let cardapio = [];
let pizzaParaAlterar = null;
let vendas = [];

// !===========================
// !Mostrar seções do sistema
// !===========================
function mostrarSecao(secao) {
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("pedido").classList.add("hidden");
  document.getElementById("venda").classList.add("hidden");
  document.getElementById("relatorio-vendas").classList.add("hidden");
  document.getElementById(secao).classList.remove("hidden");
}

// !===========================
// !Funções de Notificação
// !===========================
function showToast(message, type = 'success') {
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.textContent = message;
  document.body.appendChild(toast);
  
  setTimeout(() => {
    toast.classList.add('show');
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }, 100);
}

function showInlineError(elementId, message) {
  const element = document.getElementById(elementId);
  const errorElement = document.createElement('div');
  errorElement.className = 'error-message';
  errorElement.textContent = message;
  
  // Remove mensagem anterior se existir
  const existingError = element.parentElement.querySelector('.error-message');
  if (existingError) existingError.remove();
  
  element.parentElement.appendChild(errorElement);
  element.focus();
}

function clearInlineErrors() {
  document.querySelectorAll('.error-message').forEach(el => el.remove());
}

// !===========================
// !Cadastro de Pizza
// !===========================
function adicionarPizza() {
  clearInlineErrors();
  
  const nome = document.getElementById("titulo").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const preco = parseFloat(document.getElementById("preco").value);

  let isValid = true;
  
  if (!nome) {
    showInlineError('titulo', 'Por favor, insira o nome da pizza');
    isValid = false;
  }
  if (!ingredientes) {
    showInlineError('ingredientes', 'Por favor, insira os ingredientes');
    isValid = false;
  }
  if (!preco) {
    showInlineError('preco', 'Por favor, insira um preço válido');
    isValid = false;
  }

  if (isValid) {
    cardapio.push({ nome, ingredientes, preco });
    document.getElementById("titulo").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";
    atualizarLista();
    showToast('Pizza adicionada com sucesso!');
  }
}

//!===========================
//! Consulta de Pizza
//! ===========================
function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = cardapio.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
  
  if (resultados.length === 0) {
    showToast('Nenhuma pizza encontrada com esse nome', 'info');
  }
}

// !===========================
// !Busca para alteração
// !===========================
function buscarPizzaParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  pizzaParaAlterar = cardapio.find((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );

  if (pizzaParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = pizzaParaAlterar.nome;
    document.getElementById("novo-ingredientes").value = pizzaParaAlterar.ingredientes;
    document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
  } else {
    showToast('Pizza não encontrada', 'error');
  }
}

// !===========================
// !Alterar Pizza
// !===========================
function alterarPizza() {
  if (pizzaParaAlterar) {
    clearInlineErrors();
    
    const novoNome = document.getElementById("novo-titulo").value;
    const novosIngredientes = document.getElementById("novo-ingredientes").value;
    const novoPreco = parseFloat(document.getElementById("novo-preco").value);

    let isValid = true;
    
    if (!novoNome) {
      showInlineError('novo-titulo', 'Por favor, insira o nome da pizza');
      isValid = false;
    }
    if (!novosIngredientes) {
      showInlineError('novo-ingredientes', 'Por favor, insira os ingredientes');
      isValid = false;
    }
    if (!novoPreco) {
      showInlineError('novo-preco', 'Por favor, insira um preço válido');
      isValid = false;
    }

    if (isValid) {
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.ingredientes = novosIngredientes;
      pizzaParaAlterar.preco = novoPreco;
      atualizarLista();
      showToast('Pizza alterada com sucesso!');
      document.getElementById("form-alterar").classList.add("hidden");
    }
  }
}

// !===========================
// !Atualizar tabela com pizzas
// !===========================
function atualizarLista(lista = cardapio) {
  const tabela = document.getElementById("lista-pizzas");
  tabela.innerHTML = "";

  lista.forEach((pizza) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${pizza.nome}</td>
      <td>${pizza.ingredientes}</td>
      <td>R$ ${pizza.preco.toFixed(2)}</td>
      <td><button onclick="fazerPedido('${pizza.nome}')">Pedir</button></td>
    `;
    tabela.appendChild(linha);
  });
}

// !===========================
// !Registrar pedido
// !===========================
function registrarPedido() {
  clearInlineErrors();
  
  const nomePizza = document.getElementById("pizza-pedido").value;
  const cliente = document.getElementById("nome-cliente").value;

  let isValid = true;
  
  if (!nomePizza) {
    showInlineError('pizza-pedido', 'Por favor, selecione uma pizza');
    isValid = false;
  }
  if (!cliente) {
    showInlineError('nome-cliente', 'Por favor, insira o nome do cliente');
    isValid = false;
  }

  if (isValid) {
    const pizza = cardapio.find((p) => p.nome === nomePizza);
    if (pizza) {
      const listaPedidos = document.getElementById("lista-pedidos");
      const item = document.createElement("li");
      item.textContent = `Pizza: ${pizza.nome}, Cliente: ${cliente}`;
      listaPedidos.appendChild(item);

      document.getElementById("pizza-pedido").value = "";
      document.getElementById("nome-cliente").value = "";
      showToast(`Pedido da pizza "${pizza.nome}" registrado!`);
    } else {
      showToast('Pizza não encontrada no cardápio', 'error');
    }
  }
}

// !===========================
// !Registrar venda
// !===========================
function registrarVenda() {
  clearInlineErrors();
  
  const nome = document.getElementById("venda-titulo").value;
  const preco = parseFloat(document.getElementById("venda-preco").value);
  const cliente = document.getElementById("venda-comprador").value;

  let isValid = true;
  
  if (!nome) {
    showInlineError('venda-titulo', 'Por favor, insira o nome da pizza');
    isValid = false;
  }
  if (!preco) {
    showInlineError('venda-preco', 'Por favor, insira um preço válido');
    isValid = false;
  }
  if (!cliente) {
    showInlineError('venda-comprador', 'Por favor, insira o nome do cliente');
    isValid = false;
  }

  if (isValid) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nome}, Preço: R$${preco.toFixed(2)}, Cliente: ${cliente}`;
    listaVendas.appendChild(item);
    vendas.push({ nome, preco, cliente });

    document.getElementById("venda-titulo").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
    showToast('Venda registrada com sucesso!');
  }
}

// !===========================
// !Relatório de vendas
// !===========================
function gerarRelatorioVendas() {
  mostrarSecao("relatorio-vendas");
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
  tabelaRelatorio.innerHTML = "";

  if (vendas.length === 0) {
    showToast('Nenhuma venda registrada', 'info');
    return;
  }

  let totalVendas = 0;
  vendas.forEach((venda) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${venda.nome}</td>
      <td>R$ ${venda.preco.toFixed(2)}</td>
      <td>${venda.cliente}</td>
    `;
    tabelaRelatorio.appendChild(linha);
    totalVendas += venda.preco;
  });

  const linhaTotal = document.createElement("tr");
  linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$ ${totalVendas.toFixed(2)}</strong></td>
    <td></td>
  `;
  tabelaRelatorio.appendChild(linhaTotal);
}

// !===========================
// !Funções auxiliares
// !===========================
function fazerPedido(nomePizza) {
  document.getElementById("pizza-pedido").value = nomePizza;
  mostrarSecao("pedido");
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    showToast("Login realizado com sucesso!");
    setTimeout(() => {
      window.location.href = "pizzariafinal.html";
    }, 1000);
  } else {
    showToast("Usuário ou senha incorretos!", "error");
  }
}