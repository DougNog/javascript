// Array para armazenar as pizzas cadastradas
let pizzas = [];

// Variável para guardar a pizza que será alterada
let pizzaParaAlterar = null;

/**
 * Mostra a seção (div) escolhida e esconde todas as outras
 * @param {string} id - ID da seção a ser exibida
 */
function mostrarSecao(id) {
  // Seleciona todas as divs dentro do container
  const secoes = document.querySelectorAll(".container > div");

  // Adiciona a classe 'hidden' em todas as seções para escondê-las
  secoes.forEach((secao) => {
    secao.classList.add("hidden");
  });

  // Remove a classe 'hidden' da seção que deve ser exibida
  document.getElementById(id).classList.remove("hidden");

  // Esconde o menu principal
  document.getElementById("menu-principal").classList.add("hidden");

  // Limpa mensagens de feedback e erros
  limparMensagensFeedback();
}

/**
 * Mostra apenas o menu principal e esconde todas as seções
 */
function mostrarMenu() {
  const secoes = document.querySelectorAll(".container > div");
  secoes.forEach((secao) => {
    secao.classList.add("hidden");
  });

  // Exibe o menu principal
  document.getElementById("menu-principal").classList.remove("hidden");

  // Limpa mensagens de feedback e erros
  limparMensagensFeedback();
}

/**
 * Remove mensagens de feedback e de erro da tela
 */
function limparMensagensFeedback() {
  document
    .querySelectorAll(".feedback-message")
    .forEach((msg) => (msg.textContent = ""));
  document
    .querySelectorAll(".error-message")
    .forEach((err) => (err.textContent = ""));
}

/**
 * Valida os dados inseridos no formulário de cadastro
 * @returns {boolean} - true se válido, false se inválido
 */
function validarCadastro() {
  let valido = true;
  const nome = document.getElementById("nome");
  const ingredientes = document.getElementById("ingredientes");
  const preco = document.getElementById("preco");

  // Limpa mensagens de erro
  document
    .querySelectorAll("#cadastro .error-message")
    .forEach((err) => (err.textContent = ""));

  if (!nome.value.trim()) {
    document.getElementById("nome-erro").textContent = "O nome da pizza é obrigatório.";
    valido = false;
  }
  if (!ingredientes.value.trim()) {
    document.getElementById("ingredientes-erro").textContent = "Os ingredientes são obrigatórios.";
    valido = false;
  }
  if (!preco.value || isNaN(parseFloat(preco.value)) || parseFloat(preco.value) <= 0) {
    document.getElementById("preco-erro").textContent = "O preço deve ser um número maior que zero.";
    valido = false;
  }

  return valido;
}

/**
 * Adiciona uma nova pizza ao array e atualiza a exibição
 */
function adicionarPizza() {
  if (validarCadastro()) {
    const nome = document.getElementById("nome").value.trim();
    const ingredientes = document.getElementById("ingredientes").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);

    // Cria objeto da nova pizza
    const novaPizza = {
      id: Date.now(), // ID único baseado na data atual
      nome,
      ingredientes: ingredientes.split(",").map((item) => item.trim()),
      preco,
    };

    pizzas.push(novaPizza); // Adiciona ao array

    atualizarCardapio(); // Atualiza o cardápio

    // Limpa os campos do formulário
    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";

    // Mostra feedback
    document.getElementById("cadastro-feedback").textContent = "Pizza adicionada com sucesso!";

    // Vai para o cardápio
    mostrarSecao("cardapio");
  }
}

/**
 * Atualiza a tabela do cardápio com base nas pizzas cadastradas
 * @param {Array} lista - Lista de pizzas a ser exibida (default: todas)
 */
function atualizarCardapio(lista = pizzas) {
  const listaPizzasElement = document.getElementById("lista-pizzas");
  listaPizzasElement.innerHTML = ""; // Limpa a tabela

  lista.forEach((pizza) => {
    const row = listaPizzasElement.insertRow();
    const nomeCell = row.insertCell();
    const ingredientesCell = row.insertCell();
    const precoCell = row.insertCell();
    const acoesCell = row.insertCell();

    nomeCell.textContent = pizza.nome;
    ingredientesCell.textContent = pizza.ingredientes.join(", ");
    precoCell.textContent = `R$ ${pizza.preco.toFixed(2)}`;

    // Botão de exclusão
    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("delete-button");
    botaoExcluir.onclick = () => excluirPizza(pizza.id);

    acoesCell.appendChild(botaoExcluir);
  });
}

/**
 * Busca pizzas pelo nome no campo de busca do cardápio
 */
function buscarPizza() {
  const termoBusca = document.getElementById("busca-pizza").value.toLowerCase();
  const resultados = pizzas.filter((pizza) =>
    pizza.nome.toLowerCase().includes(termoBusca)
  );
  atualizarCardapio(resultados);
}

/**
 * Busca pizza pelo nome para alteração e preenche o formulário com os dados
 */
function buscarPizzaParaAlterar() {
  const termoBusca = document.getElementById("busca-alterar-pizza").value.toLowerCase();

  pizzaParaAlterar = pizzas.find((pizza) =>
    pizza.nome.toLowerCase().includes(termoBusca)
  );

  // Limpa mensagens de erro
  document.querySelectorAll("#alterar .error-message").forEach((err) => (err.textContent = ""));

  const formAlterar = document.getElementById("form-alterar-pizza");

  if (pizzaParaAlterar) {
    // Preenche o formulário com os dados atuais
    document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
    document.getElementById("novos-ingredientes").value = pizzaParaAlterar.ingredientes.join(", ");
    document.getElementById("novo-preco").value = pizzaParaAlterar.preco;

    formAlterar.classList.remove("hidden");
    document.getElementById("busca-alterar-feedback").textContent = "";
  } else {
    formAlterar.classList.add("hidden");
    document.getElementById("busca-alterar-feedback").textContent = "Nenhuma pizza encontrada com esse nome.";
  }
}

/**
 * Valida os dados do formulário de alteração
 * @returns {boolean} - true se válido, false se inválido
 */
function validarAlteracao() {
  let valido = true;
  const novoNome = document.getElementById("novo-nome");
  const novosIngredientes = document.getElementById("novos-ingredientes");
  const novoPreco = document.getElementById("novo-preco");

  document.querySelectorAll("#form-alterar-pizza .error-message").forEach((err) => (err.textContent = ""));

  if (!novoNome.value.trim()) {
    document.getElementById("novo-nome-erro").textContent = "O nome da pizza é obrigatório.";
    valido = false;
  }
  if (!novosIngredientes.value.trim()) {
    document.getElementById("novos-ingredientes-erro").textContent = "Os ingredientes são obrigatórios.";
    valido = false;
  }
  if (!novoPreco.value || isNaN(parseFloat(novoPreco.value)) || parseFloat(novoPreco.value) <= 0) {
    document.getElementById("novo-preco-erro").textContent = "O preço deve ser um número maior que zero.";
    valido = false;
  }

  return valido;
}

/**
 * Altera os dados da pizza selecionada
 */
function alterarPizza() {
  if (pizzaParaAlterar && validarAlteracao()) {
    // Atualiza os dados da pizza
    pizzaParaAlterar.nome = document.getElementById("novo-nome").value.trim();
    pizzaParaAlterar.ingredientes = document
      .getElementById("novos-ingredientes")
      .value.trim()
      .split(",")
      .map((item) => item.trim());
    pizzaParaAlterar.preco = parseFloat(document.getElementById("novo-preco").value);

    atualizarCardapio(); // Atualiza o cardápio
    document.getElementById("form-alterar-pizza").classList.add("hidden");
    document.getElementById("busca-alterar-pizza").value = "";
    pizzaParaAlterar = null;

    document.getElementById("alterar-feedback").textContent = "Pizza alterada com sucesso!";
    mostrarSecao("cardapio"); // Volta ao cardápio
  }
}

/**
 * Remove uma pizza da lista com confirmação do usuário
 * @param {number} id - ID da pizza a ser excluída
 */
function excluirPizza(id) {
  if (confirm("Tem certeza que deseja excluir esta pizza?")) {
    pizzas = pizzas.filter((pizza) => pizza.id !== id);
    atualizarCardapio();
    document.getElementById("cardapio-feedback").textContent = "Pizza excluída com sucesso!";
  }
}

// Exibe o menu principal ao carregar o sistema
mostrarMenu();
