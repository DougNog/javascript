let pizzas = []; // Array para armazenar as pizzas cadastradas
let pizzaParaAlterar = null; // Variável para guardar a pizza a ser alterada

function mostrarSecao(id) {
  const secoes = document.querySelectorAll(".container > div");
  secoes.forEach((secao) => {
    secao.classList.add("hidden");
  });
  document.getElementById(id).classList.remove("hidden");
  document.getElementById("menu-principal").classList.add("hidden"); // Esconde o menu principal
  limparMensagensFeedback();
}

function mostrarMenu() {
  const secoes = document.querySelectorAll(".container > div");
  secoes.forEach((secao) => {
    secao.classList.add("hidden");
  });
  document.getElementById("menu-principal").classList.remove("hidden"); // Mostra o menu principal
  limparMensagensFeedback();
}

function limparMensagensFeedback() {
  document
    .querySelectorAll(".feedback-message")
    .forEach((msg) => (msg.textContent = ""));
  document
    .querySelectorAll(".error-message")
    .forEach((err) => (err.textContent = ""));
}

function validarCadastro() {
  let valido = true;
  const nome = document.getElementById("nome");
  const ingredientes = document.getElementById("ingredientes");
  const preco = document.getElementById("preco");
  document
    .querySelectorAll("#cadastro .error-message")
    .forEach((err) => (err.textContent = ""));

  if (!nome.value.trim()) {
    document.getElementById("nome-erro").textContent =
      "O nome da pizza é obrigatório.";
    valido = false;
  }
  if (!ingredientes.value.trim()) {
    document.getElementById("ingredientes-erro").textContent =
      "Os ingredientes são obrigatórios.";
    valido = false;
  }
  if (
    !preco.value ||
    isNaN(parseFloat(preco.value)) ||
    parseFloat(preco.value) <= 0
  ) {
    document.getElementById("preco-erro").textContent =
      "O preço deve ser um número maior que zero.";
    valido = false;
  }
  return valido;
}

function adicionarPizza() {
  if (validarCadastro()) {
    const nome = document.getElementById("nome").value.trim();
    const ingredientes = document.getElementById("ingredientes").value.trim();
    const preco = parseFloat(document.getElementById("preco").value);

    const novaPizza = {
      id: Date.now(),
      nome,
      ingredientes: ingredientes.split(",").map((item) => item.trim()),
      preco,
    };
    pizzas.push(novaPizza);
    atualizarCardapio();
    document.getElementById("nome").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";
    document.getElementById("cadastro-feedback").textContent =
      "Pizza adicionada com sucesso!";
    mostrarSecao("cardapio");
  }
}

function atualizarCardapio(lista = pizzas) {
  const listaPizzasElement = document.getElementById("lista-pizzas");
  listaPizzasElement.innerHTML = "";

  lista.forEach((pizza) => {
    const row = listaPizzasElement.insertRow();
    const nomeCell = row.insertCell();
    const ingredientesCell = row.insertCell();
    const precoCell = row.insertCell();
    const acoesCell = row.insertCell();

    nomeCell.textContent = pizza.nome;
    ingredientesCell.textContent = pizza.ingredientes.join(", ");
    precoCell.textContent = `R$ ${pizza.preco.toFixed(2)}`;

    const botaoExcluir = document.createElement("button");
    botaoExcluir.textContent = "Excluir";
    botaoExcluir.classList.add("delete-button");
    botaoExcluir.onclick = () => excluirPizza(pizza.id);
    acoesCell.appendChild(botaoExcluir);
  });
}

function buscarPizza() {
  const termoBusca = document.getElementById("busca-pizza").value.toLowerCase();
  const resultados = pizzas.filter((pizza) =>
    pizza.nome.toLowerCase().includes(termoBusca)
  );
  atualizarCardapio(resultados);
}

function buscarPizzaParaAlterar() {
  const termoBusca = document
    .getElementById("busca-alterar-pizza")
    .value.toLowerCase();
  pizzaParaAlterar = pizzas.find((pizza) =>
    pizza.nome.toLowerCase().includes(termoBusca)
  );
  document
    .querySelectorAll("#alterar .error-message")
    .forEach((err) => (err.textContent = ""));

  const formAlterar = document.getElementById("form-alterar-pizza");
  if (pizzaParaAlterar) {
    document.getElementById("novo-nome").value = pizzaParaAlterar.nome;
    document.getElementById("novos-ingredientes").value =
      pizzaParaAlterar.ingredientes.join(", ");
    document.getElementById("novo-preco").value = pizzaParaAlterar.preco;
    formAlterar.classList.remove("hidden");
    document.getElementById("busca-alterar-feedback").textContent = "";
  } else {
    formAlterar.classList.add("hidden");
    document.getElementById("busca-alterar-feedback").textContent =
      "Nenhuma pizza encontrada com esse nome.";
  }
}

function validarAlteracao() {
  let valido = true;
  const novoNome = document.getElementById("novo-nome");
  const novosIngredientes = document.getElementById("novos-ingredientes");
  const novoPreco = document.getElementById("novo-preco");
  document
    .querySelectorAll("#form-alterar-pizza .error-message")
    .forEach((err) => (err.textContent = ""));

  if (!novoNome.value.trim()) {
    document.getElementById("novo-nome-erro").textContent =
      "O nome da pizza é obrigatório.";
    valido = false;
  }
  if (!novosIngredientes.value.trim()) {
    document.getElementById("novos-ingredientes-erro").textContent =
      "Os ingredientes são obrigatórios.";
    valido = false;
  }
  if (
    !novoPreco.value ||
    isNaN(parseFloat(novoPreco.value)) ||
    parseFloat(novoPreco.value) <= 0
  ) {
    document.getElementById("novo-preco-erro").textContent =
      "O preço deve ser um número maior que zero.";
    valido = false;
  }
  return valido;
}

function alterarPizza() {
  if (pizzaParaAlterar && validarAlteracao()) {
    pizzaParaAlterar.nome = document.getElementById("novo-nome").value.trim();
    pizzaParaAlterar.ingredientes = document
      .getElementById("novos-ingredientes")
      .value.trim()
      .split(",")
      .map((item) => item.trim());
    pizzaParaAlterar.preco = parseFloat(
      document.getElementById("novo-preco").value
    );
    atualizarCardapio();
    document.getElementById("form-alterar-pizza").classList.add("hidden");
    document.getElementById("busca-alterar-pizza").value = "";
    pizzaParaAlterar = null;
    document.getElementById("alterar-feedback").textContent =
      "Pizza alterada com sucesso!";
    mostrarSecao("cardapio");
  }
}

function excluirPizza(id) {
  if (confirm("Tem certeza que deseja excluir esta pizza?")) {
    pizzas = pizzas.filter((pizza) => pizza.id !== id);
    atualizarCardapio();
    document.getElementById("cardapio-feedback").textContent =
      "Pizza excluída com sucesso!";
  }
}

// Inicialmente, mostrar o menu principal
mostrarMenu();