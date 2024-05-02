// Atividade 01
// Peça ao usuário para inserir um número e escreva um programa que determine se o número é positivo e par.

var n1 = Number(prompt(`Digite um número:`))
while (isNaN(n1)){
    var n1 = Number(prompt(`Por favor digite um número válido:`));}

n1 >= 0 ? console.log(`O número é positivo`) : console.log(`O número é negativo`)
resto = n1%2
resto == 0 ? console.log(`O número é par`) : console.log(`O número é ímpar`)