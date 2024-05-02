// Atividade 04
// Solicite ao usuário que digite uma letra. Crie um programa que determine
// se a letra inserida é uma vogal ou uma consoante. Exiba a mensagem
// correspondente. Utilize estruturas condicionais para realizar essa
// verificação.

var letter = prompt(`Digite uma letra:`)
while (!isNaN(letter)){
    var letter = prompt(`Digite uma letra de novo:`)
}
if (letter == "a" || letter == "e" || letter == "i" || letter == "o"|| letter == "u"
||letter == "A" || letter == "E" || letter == "I" || letter == "O"|| letter == "U"){
    console.log(`A letra ${letter} é uma vogal.`)
}

else{
    console.log(`A letra ${letter} é uma consoante.`)
}