// Atividade 06
// Peça ao usuário que insira um preço de um produto usando o prompt. Em seguida,
// aplique um desconto de 10% a esse preço e exiba o preço com desconto no console.

var price = parseFloat(prompt(`Insira o preço:`))
while (isNaN(price)){
    var price = parseFloat(prompt(`Insira um preço válido:`));
}
var desconto = price - price * 0.10

console.log(`Valor final com desconto: R$${desconto} `)