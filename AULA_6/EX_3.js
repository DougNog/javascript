// exemplo de contador

let contador = 0; // Inicializa o contador com 0

function contar() {
    contador++;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>Agora o contador está em <mark>${contador}</mark></p>`;
}

function zerar() {
    contador = 0;
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = `<p>O contador foi zerado</p>`;
}