// Atividade 06
// Escreva um programa que solicite um número e determine se ele é um número primo.



var numbers = [2,3,5,7]
var primo = false

var n1 = Number(prompt(`Digite um número:`));
while (isNaN(n1)){
    var n1 = Number(prompt(`Por favor digite um número válido:`));
}

if (n1 in numbers){
    primo = true;
}

else if (n1 > 2){
    for (i in numbers){
        var resto = n1 % numbers[i]
        if (resto == 0){
            primo = false;
            break
        }
        else{
            primo = true;
        }       
    }  
}

primo == true ? console.log(`O número ${n1} é primo!`) : console.log(`O número ${n1} não é primo!`)
