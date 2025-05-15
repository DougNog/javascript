// ===========================
// Dados principais da pizzaria
// ===========================
let cardapio = []; // Armazena as pizzas
let pizzaParaAlterar = null; // Pizza em edição
let vendas = []; // Armazena as vendas

// ===========================
// Mostrar seções do sistema
// ===========================
function mostrarSecao(secao) {
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");
  document.getElementById("pedido").classList.add("hidden");
  document.getElementById("venda").classList.add("hidden");
  document.getElementById("relatorio-vendas").classList.add("hidden");

  document.getElementById(secao).classList.remove("hidden");
}

// ===========================
// Cadastro de Pizza
// ===========================
function adicionarPizza() {
  const nome = document.getElementById("titulo").value;
  const ingredientes = document.getElementById("ingredientes").value;
  const preco = parseFloat(document.getElementById("preco").value);

  if (nome && ingredientes && preco) {
    cardapio.push({ nome, ingredientes, preco });
    document.getElementById("titulo").value = "";
    document.getElementById("ingredientes").value = "";
    document.getElementById("preco").value = "";
    atualizarLista();
    alert("Pizza adicionada com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// ===========================
// Consulta de Pizza
// ===========================
function buscarPizza() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = cardapio.filter((pizza) =>
    pizza.nome.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

// ===========================
// Busca para alteração
// ===========================
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
    alert("Pizza não encontrada.");
  }
}

// ===========================
// Alterar Pizza
// ===========================
function alterarPizza() {
  if (pizzaParaAlterar) {
    const novoNome = document.getElementById("novo-titulo").value;
    const novosIngredientes = document.getElementById("novo-ingredientes").value;
    const novoPreco = parseFloat(document.getElementById("novo-preco").value);

    if (novoNome && novosIngredientes && novoPreco) {
      pizzaParaAlterar.nome = novoNome;
      pizzaParaAlterar.ingredientes = novosIngredientes;
      pizzaParaAlterar.preco = novoPreco;

      atualizarLista();
      alert("Pizza alterada com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

// ===========================
// Atualizar tabela com pizzas
// ===========================
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

// ===========================
// Registrar pedido
// ===========================
function registrarPedido() {
  const nomePizza = document.getElementById("pizza-pedido").value;
  const cliente = document.getElementById("nome-cliente").value;

  if (nomePizza && cliente) {
    const pizza = cardapio.find((p) => p.nome === nomePizza);
    
    if (pizza) {
      const listaPedidos = document.getElementById("lista-pedidos");
      const item = document.createElement("li");
      item.textContent = `Pizza: ${pizza.nome}, Cliente: ${cliente}`;
      listaPedidos.appendChild(item);

      document.getElementById("pizza-pedido").value = "";
      document.getElementById("nome-cliente").value = "";
      
      alert(`Pedido da pizza "${pizza.nome}" para ${cliente} registrado com sucesso!`);
    } else {
      alert("Pizza não encontrada no cardápio.");
    }
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// ===========================
// Registrar venda
// ===========================
function registrarVenda() {
  const nome = document.getElementById("venda-titulo").value;
  const preco = parseFloat(document.getElementById("venda-preco").value);
  const cliente = document.getElementById("venda-comprador").value;

  if (nome && preco && cliente) {
    const listaVendas = document.getElementById("lista-vendas");
    const item = document.createElement("li");
    item.textContent = `Pizza: ${nome}, Preço: R$${preco.toFixed(2)}, Cliente: ${cliente}`;
    listaVendas.appendChild(item);

    vendas.push({ nome, preco, cliente });

    document.getElementById("venda-titulo").value = "";
    document.getElementById("venda-preco").value = "";
    document.getElementById("venda-comprador").value = "";
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

// ===========================
// Relatório de vendas
// ===========================
function gerarRelatorioVendas() {
  mostrarSecao("relatorio-vendas");
  const tabelaRelatorio = document.getElementById("tabela-relatorio-vendas");
  tabelaRelatorio.innerHTML = "";

  if (vendas.length === 0) {
    alert("Nenhuma venda registrada.");
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

// Função auxiliar para pedidos a partir da tabela
function fazerPedido(nomePizza) {
  document.getElementById("pizza-pedido").value = nomePizza;
  mostrarSecao("pedido");
}