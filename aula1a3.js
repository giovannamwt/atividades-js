// Atividade 03
// Peça ao usuário para digitar sua idade usando o prompt e, em seguida,
// calcule e exiba o ano de nascimento com uma frase personalizada usando
// o console.


var age = Number(prompt(`Digite a sua idade:`))

while (isNaN(age)){
    var age = Number(prompt(`Digite a sua idade em números inteiros:`));
}

var year = 2024 - age

console.log(`Você nasceu em ${year} e tem ${age} anos`)


