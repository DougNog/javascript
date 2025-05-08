// imprimir números pares de  1 a 20

for (let i = 2; i <= 30; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// calcular a soma dos números:

let soma = 0;
for (let i = 1; i <= 100; i++) {
    soma += i;
} 
console.log(soma);

// calcular o fatorial de um número fornecido pelo usuário

// const readline = require('readline-sync');

// let numero  = readlynesync.question('Digite um número: ');
let numero = 5;

numero = Number(numero);

let fatorial = 1;
for (let i = 1; i <= numero; i++) {
    fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}.`);

// iterar sobre um array

let frutas = ['maça' , 'banana' , 'laranja'];
for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);
}

// exemplo

let esportes = ['futebol', 'vôlei', 'basquete', 'natação', 'atletismo'];
for (let i = 0; i < esportes.length; i++) {
    console.log(esportes[i]);
}
