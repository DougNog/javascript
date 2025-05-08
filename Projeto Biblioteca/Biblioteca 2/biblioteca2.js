let biblioteca = [];
let livroParaAlterar = null;

function mostrarSecao(secao) {
  // Esconde todas as seções
  document.getElementById("cadastro").classList.add("hidden");
  document.getElementById("consulta").classList.add("hidden");
  document.getElementById("alterar").classList.add("hidden");

  // Mostra a seção selecionada
  document.getElementById(secao).classList.remove("hidden");
}

function adicionarLivro() {
  const titulo = document.getElementById("titulo").value;
  const autor = document.getElementById("autor").value;
  const ano = parseInt(document.getElementById("ano").value);

  if (titulo && autor && ano) {
    biblioteca.push({ titulo, autor, ano });
    document.getElementById("titulo").value = "";
    document.getElementById("autor").value = "";
    document.getElementById("ano").value = "";
    atualizarLista();
    alert("Livro adicionado com sucesso!");
  } else {
    alert("Por favor, preencha todos os campos.");
  }
}

function buscarLivro() {
  const busca = document.getElementById("busca").value.toLowerCase();
  const resultados = biblioteca.filter((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );
  atualizarLista(resultados);
}

function buscarLivroParaAlterar() {
  const busca = document.getElementById("busca-alterar").value.toLowerCase();
  livroParaAlterar = biblioteca.find((livro) =>
    livro.titulo.toLowerCase().includes(busca)
  );

  if (livroParaAlterar) {
    document.getElementById("form-alterar").classList.remove("hidden");
    document.getElementById("novo-titulo").value = livroParaAlterar.titulo;
    document.getElementById("novo-autor").value = livroParaAlterar.autor;
    document.getElementById("novo-ano").value = livroParaAlterar.ano;
  } else {
    alert("Livro não encontrado.");
  }
}
3
function alterarLivro() {
  if (livroParaAlterar) {
    const novoTitulo = document.getElementById("novo-titulo").value;
    const novoAutor = document.getElementById("novo-autor").value;
    const novoAno = parseInt(document.getElementById("novo-ano").value);

    if (novoTitulo && novoAutor && novoAno) {
      livroParaAlterar.titulo = novoTitulo;
      livroParaAlterar.autor = novoAutor;
      livroParaAlterar.ano = novoAno;

      atualizarLista();
      alert("Livro alterado com sucesso!");
      document.getElementById("form-alterar").classList.add("hidden");
    } else {
      alert("Por favor, preencha todos os campos.");
    }
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  lista.forEach((livro) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
      <td>${livro.titulo}</td>
      <td>${livro.autor}</td>
      <td>${livro.ano}</td>
    `;
    tabela.appendChild(linha);
  });
}

// Adiciona a funcionalidade de empréstimo
function emprestarLivro(titulo) {
  const livro = biblioteca.find((livro) => livro.titulo === titulo);

  if (livro) {
    alert(`O livro "${livro.titulo}" foi emprestado com sucesso!`);
    // Aqui você pode adicionar lógica adicional, como marcar o livro como emprestado
    biblioteca = biblioteca.filter((livro) => livro.titulo !== titulo); // Remove o livro da lista
    atualizarLista();
  } else {
    alert("Livro não encontrado.");
  }
}

function atualizarLista(lista = biblioteca) {
  const tabela = document.getElementById("lista-livros");
  tabela.innerHTML = "";

  lista.forEach((livro) => {
    const linha = document.createElement("tr");
    linha.innerHTML = `
        <td>${livro.titulo}</td>
        <td>${livro.autor}</td>
        <td>${livro.ano}</td>
        <td><button onclick="emprestarLivro('${livro.titulo}')">Emprestar</button></td>
      `;
    tabela.appendChild(linha);
  });
}
