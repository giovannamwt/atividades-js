// Atividade 03
// Peça ao usuário para inserir o preço de um produto e sua idade. E calcule o preço final com desconto,
// Se o usuário tiver menos de 18 anos, aplique um desconto de 10%. Se o usuário tiver 18 anos ou mais,
// não aplique desconto.

var price = parseFloat(prompt(`Digite o preço do produto:`))
var age = parseFloat(prompt(`Digite sua idade:`))
if (age < 19){
    console.log(`Você ganhou 10% de desconto! Valor final: R$${price*0.90}`)
}
else{
    console.log(`Você não ganhou desconto! Valor final: R$${price}`)
}