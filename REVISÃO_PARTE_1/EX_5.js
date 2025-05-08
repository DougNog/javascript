const numeros = require("readline");

const num = numeros.createInterface({
    input: process.stdin,
    output: process.stdout
}); 

num.question("Digite um número: ", (num1) => {
    num.question("Digite outro numero: ", (num2) => {
        num.question("Digite mais um número: ", (num3) => {
            num.question("Digite mais um número: ", (num4) => {
                let soma = Number(num1) + Number(num2) + Number(num3) + Number(num4);
                console.log(`A soma dos números é ${soma}`);
                num.close();
            });
        });
    });
});