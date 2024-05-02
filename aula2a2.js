// Atividade 02
// Crie um programa que solicite ao usuário seu peso (em kg) e altura
// (em metros) e calcule o IMC. Em seguida, informe a categoria de
// acordo com a tabela de IMC (por exemplo, abaixo do peso, peso
// normal, sobrepeso, etc.).


var peso = parseFloat(prompt(`Digite seu peso:`))
while (isNaN(peso)){
    var peso = parseFloat(prompt(`Por favor digite o seu peso verdadeiro:`));}
var altura = parseFloat(prompt(`Digite sua altura:`))
while (isNaN(altura)){
    var altura = parseFloat(prompt(`Por favor digite o sua altura verdadeira:`));}
imc = peso/(altura*altura)
console.log(`IMC ${imc}`)

switch (true){
    case imc < 18.5:
        console.log(`Você está abaixo do peso`);
        break;
    case imc > 18.4 && imc < 25:
        console.log(`Seu peso é normal`);
        break;
    case imc > 24.9 && imc < 30:
        console.log(`Você está com sobrepeso`);
        break;
    case imc > 29.9 && imc < 35:
        console.log(`Você está com Obesidade grau I`);
        break;
    case imc > 34.9 && imc < 40:
        console.log(`Você está com Obesidade grau II`);
        break;
    case imc > 39.9:
        console.log(`Você está com Obesidade grau III`);
        break;
}