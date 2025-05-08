function mostrarMeses() {
    const meses = [
        "Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho",
        "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"
    ];
    document.getElementById('listaMeses').innerHTML = meses
        .map(mes => `<li>${mes}</li>`)
        .join('');
}