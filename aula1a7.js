// Atividade 07
// Solicite ao usuário que insira um valor em metros usando o prompt e, em seguida,
// converta esse valor para centímetros (1 metro = 100 centímetros) e exiba o resultado no console.

var metric = parseFloat(prompt(`Insira o valor em metros:`))
while (isNaN(metric)){
    var metric = parseFloat(prompt(`Insira o valor válido em metros:`));
}
var cents = metric * 100

console.log(`O valor ${metric} metros é equivalente a ${cents} centimetros. `)