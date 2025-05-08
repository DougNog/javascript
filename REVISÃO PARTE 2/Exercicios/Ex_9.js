//9. Validação de Placa de Veículo
//Escreva um programa que valide se a placa do veículo digitada está cadastrada no sistema.

let placas = ["ABC1234", "DEF5678", "GHI9101", "JKL1121", "MNO3141"];

function validarPlaca() {
    let placa = prompt("Digite a placa do veículo: ");
    if (placas.includes(placa)) {
        alert("Placa cadastrada no sistema!");
    } else {
        alert("Placa não cadastrada no sistema!");
    }
}

validarPlaca();

