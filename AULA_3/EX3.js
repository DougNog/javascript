// condiocionais com if else e else if 

let nota = 80
if (nota >= 80) {
    console.log('Parabéns, você foi aprovado(a)!');
} else if (nota < 80 && nota >= 60) {
    console.log('Você está na nosa lista de espera');
} else {
    console.log('Você foi reprovado');
}

// vacina (treino)
let idade = 60
if (idade >=60) {
    console.log('Já pode vacinar');
} else if (idade < 60 && idade >=50) {
    console.log('lista de espera');
} else {
    console.log('não pode vacinar')
}

// notas
let nota1 = 90
if(nota1 >=90) {
    console.log('Excelente');
} else if (nota1 >=80) {
    console.log('Bom');
}
else {
    console.log('Você precisa estudar')
}

// hora do dia 
let hora = 12;
if (hora <= 12) {
    console.log('Bom dia');
} else if (hora >= 12 && hora <= 18) {
    console.log('Boa tarde');
} else {
    console.log('Boa noite')
}

// dia da semana
let dia = "segunda";
if (dia === "domingo") {
    console.log('Vou a praia');
} else if (dia = 'segunda') {
    console.log('fico em casa');
} else if ( dia = 'terça') {
    console.log('aula de inglês');
} else if (dia = 'quarta') {
    console.log('vou a escola');
} else if ( dia = 'quinta') {
    console.log('fico me casa');
} else if (dia = 'sexta') {
    console.log('trablho');
} else if (dia = 'sabado') {
    console.log('descanso');
}else {
    console.log('descanso');
}