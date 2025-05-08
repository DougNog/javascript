// algoritimo que escreva a palvra "Aluno" 11 vezes 

for (let i = 0; i < 11; i++) {
    console.log('Olá Mundo');
}

// algoritimo que faça o calculo da tabuada colocada pelo usuario

let tabuada = 0;
for (let i = 1; i <= 10; i++) {
    console.log(`${tabuada} x ${i} = ${tabuada * i}`);
}

// algoritimo que faça a soma dos numeros impares de 1 a 100

let soma = 0;
for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
        soma += i;
    }
}
console.log(soma);

// contagemregressiva de 10 a 1 e no final escreva "Feliz ano novo"

for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log('Feliz ano novo');

// ---------------------------------------exercicios------------------------------------------------------//

// Exemplo 1: Verificação de Categoria de Idade
//Escreva um programa que classifique a idade de uma pessoa em categorias(criança, adolescente, adulto, idoso) e imprima uma mensagem apropriada.

let idade = 32;
let categoria = '';

if (idade <= 12) {
    categoria = 'Criança';
} else if (idade <= 18) {
    categoria = 'Adolescente';
} else if (idade <= 59) {
    categoria = 'Adulto';
} else {
    categoria = 'Idoso';
}
console.log(`A pessoa é ${categoria}`);

//Exemplo 2: Verificação de Nota com Mensagem
//Escreva um programa que verifique a nota de um aluno e imprima uma mensagem personalizada com base na nota.

let nota = 7;
let mensagem = '';

if (nota < 5) {
    mensagem = 'Reprovado';
} else if (nota < 7) {
    mensagem = 'Recuperação';
} else {
    mensagem = 'Aprovado';
}
console.log(`O aluno está ${mensagem}`);

//Exemplo 3: Verificação de Dia da Semana
//Escreva um programa que verifique o dia da semana e imprima uma mensagem apropriada. (Deixar o mais curto possível)

let dia = 'terça';
let mensagem = '';

if (dia === 'sábado' || dia === 'domingo') {
    mensagem = 'Descanso merecido';
} else {
    mensagem = 'vá trabalhar :(';
}
console.log(mensagem);

// Exemplo 4: Verificação de Horário do Dia
//Escreva um programa que verifique a hora do dia e imprima uma mensagem apropriada (manhã, tarde, noite).

let hora = 00;
let periodo = '';

if (hora < 12) {
    periodo = 'Manhã';
} else if (hora < 18) {
    periodo = 'Tarde';
} else {
    periodo = 'Noite';
}
console.log(`Estamos no período da ${periodo}`);

// Exemplo 5: Verificação de Peso Ideal
//Escreva um programa que verifique se uma pessoa está abaixo, dentro ou acima do peso ideal com base no IMC (Índice de Massa Corporal).

let peso = 70;
let altura = 1.75;
let imc = peso / (altura ** 2);
let mensagem = '';

if (imc < 18.5) {
    mensagem = 'Abaixo do peso';
} else if (imc < 24.9) {
    mensagem = 'normal';
} else if (imc < 29.9) {
    mensagem = 'Acima do peso';
} else {
    mensagem = 'Obesa';
}
console.log(`O IMC da pessoa é ${imc.toFixed(2)} ela está ${mensagem}`);

// Exemplo 6: Verificação de Número Primo
//Escreva um programa que verifique se um número é primo.

let numero = 12;
let primo = true;

for (let i = 2; i < numero; i++) {
    if (numero % i === 0) {
        primo = false;
        break;
    }
}
console.log(primo ? 'É primo' : 'Não é primo');

// Exemplo 7: Verificação de Ano Bissexto
//Escreva um programa que verifique se um ano é bissexto.

let ano = 2023;
let bissexto = (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
console.log(bissexto ? 'É bissexto' : 'Não é bissexto');

// Exemplo 8: Verificação de Nota com Mensagem Personalizada
//Escreva um programa que verifique a nota de um aluno e imprima uma mensagem personalizada com base na nota.

let nota = 7;
let mensagem = '';

if (nota < 5) {
    mensagem = 'Reprovado';
} else if (nota < 7) {
    mensagem = 'Recuperação';
} else {
    mensagem = 'Aprovado';
}
console.log(`O aluno está ${mensagem}`);


// Exemplo 9: Verificação de Temperatura com Mensagem
//Escreva um programa que verifique a temperatura e imprima uma mensagem apropriada.

let temperatura = 12;
let mensagem = '';

if (temperatura < 18) {
    mensagem = 'Frio';
} else if (temperatura < 25) {
    mensagem = 'Agradável';
} else {
    mensagem = 'Quente';
}
console.log(`A temperatura está ${mensagem}`);

// Exemplo 10: Verificação de Desempenho de Vendas
//Escreva um programa que verifique o desempenho de vendas de um vendedor e imprima uma mensagem apropriada.

let vendas = 4576;
let meta = 5000;
let mensagem = '';

if (vendas >= meta) {
    mensagem = 'Meta batida';
} else {
    mensagem = 'Meta não batida';
}
console.log(mensagem);