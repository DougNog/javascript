// ===========================
// Dados principais da pizzaria
// ===========================

// Array que armazena todas as pizzas do cardápio
let cardapio = [];

// Variável para armazenar a pizza que está sendo editada no momento
let pizzaParaAlterar = null;

// Array que armazena todas as vendas realizadas
let vendas = [];

// ===========================
// Mostrar seções do sistema
// ===========================
/**
 * Função que controla a exibição das diferentes seções da aplicação
 * @param {string} secao - ID da seção que deve ser mostrada
 */
function mostrarSecao(secao) {
  // Oculta todas as seções primeiro
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("pedido").classList.add("hidden");
  document.getElementById("venda").classList.add("hidden");
  document.getElementById("relatorio-vendas").classList.add("hidden");

  // Mostra apenas a seção solicitada
  document.getElementById(secao).classList.remove("hidden");
}

// !===========================
// !Cadastro de Pizza
// !===========================
/**
 * !Função para adicionar uma nova pizza ao cardápio
 * Valida os campos e adiciona ao array cardapio
 */
function adicionarPizza() {
  // Obtém os valores dos campos do formulário
  const nome = document.getElementById("titulo").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const preco = parseFloat(document.getElementById("preco").value);

  // Verifica se todos os campos foram preenchidos
  if (nome && ingredientes && preco) {
    // Adiciona a nova pizza ao cardápio
    cardapio.push({ nome, ingredientes, preco });

    // Limpa os campos do formulário
    document.getElementById("titulo").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";

    // Atualiza a lista de pizzas exibida
    atualizarLista();

    // Exibe mensagem de sucesso
    alert("Pizza adicionada com sucesso!");
  } else {
    // Exibe mensagem de erro se algum campo estiver vazio
    alert("Por favor, preencha todos os campos.");
  }
}

//!===========================
//! Consulta de Pizza
//! ===========================
/**
 * !Função para buscar pizzas no cardápio por nome
 * Filtra as pizzas conforme o texto digitado e atualiza a exibição
 */
function buscarPizza() {
  // Obtém o valor de busca e converte para minúsculas
  const busca = document.getElementById("busca").value.toLowerCase();

  // Filtra as pizzas que contêm o texto de busca no nome
  const resultados = cardapio.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );

  // Atualiza a tabela com os resultados da busca
  atualizarLista(resultados);
}

// !===========================
// !Busca para alteração
// !===========================
/**
 * !Função para encontrar uma pizza para edição
 * Preenche o formulário de edição com os dados da pizza encontrada
 */
function buscarPizzaParaAlterar() {
  // Obtém o valor de busca e converte para minúsculas
  const busca = document.getElementById("busca-alterar").value.toLowerCase();

  // Procura a primeira pizza que corresponde à busca
  pizzaParaAlterar = cardapio.find((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );

  // Se encontrou a pizza
  if (pizzaParaAlterar) {
    // Mostra o formulário de alteração
    document.getElementById("form-alterar").classList.remove("hidden");

    // Preenche os campos com os dados atuais da pizza
    document.getElementById("novo-titulo").value = pizzaParaAlterar.nome;
    document.getElementById("novo-ingredientes").value =
      pizzaParaAlterar.ingredientes;
    document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
  } else {
    // Se não encontrou, exibe mensagem
    alert("Pizza não encontrada.");
  }
}

// !===========================
// !Alterar Pizza
// !===========================
/**
 * !Função para salvar as alterações feitas em uma pizza
 * Atualiza os dados da pizza no cardápio
 */
function alterarPizza() {
  // Verifica se há uma pizza selecionada para alteração
  if (pizzaParaAlterar) {
    // Obtém os novos valores dos campos
    const novoNome = document.getElementById("novo-titulo").value;
    const novosIngredientes =
      document.getElementById("novo-ingredientes").value;
    const novoPreco = parseFloat(document.getElementById("novo-preco").value);

    // Verifica se todos os campos foram preenchidos
    if (novoNome && novosIngredientes && novoPreco) {
      // Atualiza os dados da pizza
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.ingredientes = novosIngredientes;
      pizzaParaAlterar.preco = novoPreco;

      // Atualiza a lista de pizzas exibida
      atualizarLista();

      // Exibe mensagem de sucesso
      alert("Pizza alterada com sucesso!");

      // Oculta o formulário de alteração
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      // Exibe mensagem de erro se algum campo estiver vazio
      alert("Por favor, preencha todos os campos.");
    }
  }
}

// !===========================
// !Atualizar tabela com pizzas
// !===========================
/**
 * !Função para atualizar a tabela que exibe as pizzas
 * @param {Array} lista - Lista de pizzas a serem exibidas (opcional, padrão é o cardápio completo)
 */
function atualizarLista(lista = cardapio) {
  //Obtém a referência ao corpo da tabela
  const tabela = document.getElementById("lista-pizzas");

  // Limpa o conteúdo atual da tabela
  tabela.innerHTML = "";

  // Para cada pizza na lista fornecida
  lista.forEach((pizza) => {
    // Cria uma nova linha na tabela
    const linha = document.createElement("tr");

    // Preenche a linha com os dados da pizza e um botão para pedir
    linha.innerHTML = `
      <td>${pizza.nome}</td>
      <td>${pizza.ingredientes}</td>
      <td>R$ ${pizza.preco.toFixed(2)}</td>
      <td><button onclick="fazerPedido('${pizza.nome}')">Pedir</button></td>
    `;

    // Adiciona a linha à tabela
    tabela.appendChild(linha);
  });
}

// !===========================
// !Registrar pedido
// !===========================
/**
 * !Função para registrar um novo pedido de pizza
 * Valida os campos e adiciona à lista de pedidos
 */
function registrarPedido() {
  // Obtém os valores dos campos
  const nomePizza = document.getElementById("pizza-pedido").value;
  const cliente = document.getElementById("nome-cliente").value;

  // Verifica se os campos foram preenchidos
  if (nomePizza && cliente) {
    // Procura a pizza no cardápio
    const pizza = cardapio.find((p) => p.nome === nomePizza);

    // Se encontrou a pizza
    if (pizza) {
      // Obtém a lista de pedidos
      const listaPedidos = document.getElementById("lista-pedidos");

      // Cria um novo item para a lista
      const item = document.createElement("li");

      // Define o texto do item com os dados do pedido
      item.textContent = `Pizza: ${pizza.nome}, Cliente: ${cliente}`;

      // Adiciona o item à lista
      listaPedidos.appendChild(item);

      // Limpa os campos do formulário
      document.getElementById("pizza-pedido").value = "";
      document.getElementById("nome-cliente").value = "";

      // Exibe mensagem de sucesso
      alert(
        `Pedido da pizza "${pizza.nome}" para ${cliente} registrado com sucesso!`
      );
    } else {
      // Se não encontrou a pizza, exibe mensagem
      alert("Pizza não encontrada no cardápio.");
    }
  } else {
    // Se campos não preenchidos, exibe mensagem
    alert("Por favor, preencha todos os campos.");
  }
}

// !===========================
// !Registrar venda
// !===========================
/**
 * !Função para registrar uma nova venda de pizza
 * Valida os campos, adiciona à lista de vendas e ao array vendas
 */
function registrarVenda() {
  // Obtém os valores dos campos
  const nome = document.getElementById("venda-titulo").value;
  const preco = parseFloat(document.getElementById("venda-preco").value);
  const cliente = document.getElementById("venda-comprador").value;

  // Verifica se os campos foram preenchidos
  if (nome && preco && cliente) {
    // Obtém a lista de vendas
    const listaVendas = document.getElementById("lista-vendas");

    // Cria um novo item para a lista
    const item = document.createElement("li");

    // Define o texto do item com os dados da venda
    item.textContent = `Pizza: ${nome}, Preço: R$${preco.toFixed(
      2
    )}, Cliente: ${cliente}`;

    // Adiciona o item à lista
    listaVendas.appendChild(item);

    // Adiciona a venda ao array de vendas
    vendas.push({ nome, preco, cliente });

    // Limpa os campos do formulário
    document.getElementById("venda-titulo").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
    // Se campos não preenchidos, exibe mensagem
    alert("Por favor, preencha todos os campos.");
  }
}

// !===========================
// !Relatório de vendas
// !===========================
/**
 * Função para gerar o relatório de vendas
 * Exibe todas as vendas registradas e calcula o total
 */
function gerarRelatorioVendas() {
  // Mostra a seção de relatório
  mostrarSecao("relatorio-vendas");

  // Obtém a referência ao corpo da tabela de relatório
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");

  // Limpa o conteúdo atual da tabela
  tabelaRelatorio.innerHTML = "";

  // Verifica se há vendas registradas
  if (vendas.length === 0) {
    alert("Nenhuma venda registrada.");
    return;
  }

  // Variável para acumular o total das vendas
  let totalVendas = 0;

  // Para cada venda no array de vendas
  vendas.forEach((venda) => {
    // Cria uma nova linha na tabela
    const linha = document.createElement("tr");

    // Preenche a linha com os dados da venda
    linha.innerHTML = `
      <td>${venda.nome}</td>
      <td>R$ ${venda.preco.toFixed(2)}</td>
      <td>${venda.cliente}</td>
    `;

    // Adiciona a linha à tabela
    tabelaRelatorio.appendChild(linha);

    // Acumula o valor da venda no total
    totalVendas += venda.preco;
  });

  // Cria uma linha para exibir o total
  const linhaTotal = document.createElement("tr");
  linhaTotal.innerHTML = `
    <td><strong>Total</strong></td>
    <td><strong>R$ ${totalVendas.toFixed(2)}</strong></td>
    <td></td>
  `;

  // Adiciona a linha do total à tabela
  tabelaRelatorio.appendChild(linhaTotal);
}

// !===========================
// !Funções auxiliares
// !===========================

/**
 * Preenche o campo de pizza no formulário de pedido e mostra a seção
 * @param {string} nomePizza - Nome da pizza a ser pedida
 */
function fazerPedido(nomePizza) {
  // Preenche o campo de pizza com o nome fornecido
  document.getElementById("pizza-pedido").value = nomePizza;

  // Mostra a seção de pedidos
  mostrarSecao("pedido");
}

/**
 * Exibe uma mensagem na tela (para feedback ao usuário)
 * @param {string} texto - Texto da mensagem a ser exibida
 * @param {string} tipo - Tipo da mensagem ('sucesso' ou 'erro')
 */
function exibirMensagem(texto, tipo) {
  // Obtém o elemento de mensagem
  const mensagem = document.getElementById("mensagem");

  // Define o texto da mensagem
  mensagem.textContent = texto;

  // Adiciona a classe de estilo conforme o tipo
  mensagem.className = `mensagem ${tipo}`;

  // Mostra a mensagem
  mensagem.classList.remove("hidden");

  // Configura para esconder a mensagem após 3 segundos
  setTimeout(() => {
    mensagem.classList.add("hidden");
  }, 3000);
}

/**
 * Valida as credenciais de login do usuário
 * (Implementação básica com usuário e senha fixos)
 */
function validarLogin() {
  // Obtém os valores dos campos
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  // Credenciais fixas (em um sistema real, isso seria verificado no servidor)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  // Verifica se as credenciais estão corretas
  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    // Exibe mensagem de sucesso
    exibirMensagem("Login realizado com sucesso!", "sucesso");

    // Redireciona para a página principal após 1 segundo
    setTimeout(() => {
      window.location.href = "pizzariafinal.html";
    }, 1000);
  } else {
    // Exibe mensagem de erro
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}