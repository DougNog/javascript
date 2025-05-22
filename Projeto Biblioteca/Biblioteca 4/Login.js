function exibirMensagem(texto, tipo) {
  const mensagem = document.getElementById("mensagem");
  mensagem.textContent = texto;
  //Adiciona a classe de estilo (sucesso ou erro)
  mensagem.className = `mensagem ${tipo}`;
  mensagem.classList.remove("hidden");

  //remove a mensagem apos 3 segundos
  setTimeout(() => {
    exibirMensagem.classList.add("hidden");
  }, 3000);
}

function validarLogin() {
  const usuario = document.getElementById("usuario").value;
  const senha = document.getElementById("senha").value;

  //usuario e senhas fixos para validação
  //(pode ser alterado para algo mais avençado)
  const usuarioCorreto = "admin";
  const senhaCorreta = "1234";

  if (usuario === usuarioCorreto && senha === senhaCorreta) {
    exibirMensagem("Login realizado com sucesso!", "sucesso");
    setTimout(() => {
      //redireciona para a pagina de principal
      window.location.href = "Login.html";
    }, 1000); // aguarda 1 segundoantes de redirecionar
  } else {
    exibirMensagem("Usuário ou senha incorretos!", "erro");
  }
}
