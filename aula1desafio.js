// Faça um Programa que pergunte quanto você ganha por hora e o número de horas trabalhadas no mês. 
// Calcule e mostre o total do seu salário no referido mês, sabendo-se que são descontados 11%
// para o Imposto de Renda, 8% para o INSS e 5% para o sindicato, faça um programa que nos dê:
// 1.salário bruto.
// 2.quanto pagou ao INSS.
// 3.quanto pagou ao sindicato.
// 5. calcule os descontos e o salário liquido


var hour = parseFloat(prompt(`Quanto você ganha por hora?`))
while (isNaN(hour)){
    var metric = parseFloat(prompt(`Insira o valor válido do quanto você ganha por hora:`));
}
var month = parseFloat(prompt(`E quantas horas você trabalha por mês?`))
while (isNaN(month)){
    var metric = parseFloat(prompt(`Insira o valor válido de quantas horas você trabalha poro mês:`));
}
var bruto = hour * month
console.log(`Este mês, seu salário bruto é de R$${bruto}.`)
var inss = bruto * 0.08
console.log(`Sua contribuição ao INSS foi R$${inss}.`)
var sindicato = bruto * 0.05
console.log(`Sua contribuição ao sindicato foi R$${sindicato}.`)
var descontos = inss + sindicato
var liquido = bruto - descontos
console.log(`Seu salário líquido é de R$${liquido}.`)
