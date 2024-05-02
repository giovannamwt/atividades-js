// Atividade 05
// Crie um programa que solicite ao usuário que insira um valor em dólares usando o prompt.
// Em seguida, converta esse valor para euros (1 dólar = 0,85 euros) e exiba o resultado no console.

var dolar = parseFloat(prompt(`Insira o valor em dólar:`))
while (isNaN(dolar)){
    var dolar = parseFloat(prompt(`Insira um valor válido em dólar:`));
}
var euro = dolar * 0.85
console.log(`O valor US$${dolar} convertido para euro é €${euro}`)