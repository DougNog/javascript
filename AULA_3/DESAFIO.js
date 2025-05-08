// desafio 1
// criar algoritomo para separar valores pares de impares 

// desafio 2
// criar algoritimo para calcular valores com expressões some, subtrair, multiplicar e dividir 

// desafio 1
let num1 = 5

if (num1 % 2 === 0) {
    console.log('O numero é par');
} else {
    console.log('O numero é impar');
}

// desafio 2 - forma 1
let num2 = 10
let num3 = 20
let conta = 1

if (conta == 1) {
    let resultado = num2 + num3;
    console.log('resultado da soma é ' + resultado)
} else if (conta == 'subtração') {
    let resultado = num2 - num3;
    console.log('O resultado da subtração é ' + resultado);
}

// forma 2
let num4 = 10
let num5 = 20
let conta1 = 1

if (conta1 == 1) {
    console.log('O resultado da soma é ' + (num4 + num5))
}

// forma 3
let num6 = 5
let operador = '+'
let num7 = 10

if (operador == '+') {
    console.log('\n ${num6} + ${num7} = ${num6+num7} \n')
}

// forma 4

let num8 = 10
let num9 = 20
let soma = num8 + num9

let equacao = 'soma'
if (equacao == 'soma') {
    console.log('A soma foi ' + soma)
}

// forma 5

let a = 10
let b =5

let soma1 = a + b
let subtracao = a - b
let multiplicacao = a * b
let divisao = a / b

console.log('resultado soma ' + soma1)
console.log('resultado soma ' + subtracao)

// desafio 3 - algoritimo positivo/negativo

let num10 = 1

if (num10 >= 0) {
    console.log('O numero é positivo ')
} else {
    console.log('O numero é negativo ')
}

