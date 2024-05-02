var n1 = Number(prompt(`Digite o primeiro número:`))
while (isNaN(n1)){
    var n1 = Number(prompt(`Por favor digite o primeiro número:`));
}
var n2 = Number(prompt(`Digite o segundo número:`))
while (isNaN(n1)){
    var n2 = Number(prompt(`Por favor digite o segundo número:`));
}
var soma = n1 + n2
console.log(`A soma dos números ${n1} + ${n2} = ${soma}`)
