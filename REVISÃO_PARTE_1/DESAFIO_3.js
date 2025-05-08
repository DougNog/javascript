//calcular média de notas com base em duas notas, sendo a primeira nota 6 e a segunda nota 10 e mais uma nota 4 para trabalhos 

let nota1 = parseFloat(prompt("Digite a primeira nota: "));
let nota2 = parseFloat(prompt("Digite a segunda nota: "));
let trabalho = parseFloat(prompt("Digite a nota do trabalho: "));

let media = (nota1 + nota2 + trabalho) / 2;
alert(`A média é: ${media}`);