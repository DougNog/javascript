let estado = 0;

function mudarLuz() {
  const luzVermelha = document.getElementById("vermelha");
  const luzAmarela = document.getElementById("amarela");
  const luzVerde = document.getElementById("verde");
  const luzLaranja = document.getElementById("laranja");
  const luzRosa = document.getElementById("rosa");

  luzVermelha.classList.remove("vermelha");
  luzAmarela.classList.remove("amarela");
  luzVerde.classList.remove("verde");
  luzLaranja.classList.remove("laranja");
  luzRosa.classList.remove("rosa");

  if (estado === 0) {
    luzVermelha.classList.add("vermelha");
    estado = 1;
  } else if (estado === 1) {
    luzAmarela.classList.add("amarela");
    estado = 2;
  } else if (estado === 2) {
    luzVerde.classList.add("verde");
    estado = 3;
  } else if (estado === 3) {
    luzLaranja.classList.add("laranja");
    estado = 4;
  } else if (estado === 4) {
    luzRosa.classList.add("rosa");
    estado = 0;
  }
}
