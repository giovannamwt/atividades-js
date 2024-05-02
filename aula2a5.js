// Atividade 05
// Crie um programa que solicite um número de 1 a 7, representando o dia da semana.
// Use uma estrutura switch (ou equivalente) para imprimir o nome do dia correspondente.


var semana = Number(prompt(`Digite um número de 1 a 7:`))
while (isNaN(semana)){
    var semana = Number(prompt(`Digite novamente um número entre 1 e 7:`));}

if (semana > 0 && semana < 8){
    switch (semana){
        case 1:
            console.log(`Hoje é Domingo`);
            break;
        case 2:
            console.log(`Hoje é Segunda`);
            break;
        case 3:
            console.log(`Hoje é Terça`);
            break;
        case 4:
            console.log(`Hoje é Quarta`);
            break;
        case 5:
            console.log(`Hoje é Quinta`);
            break;
        case 6:
            console.log(`Hoje é Sexta`);
            break;
        case 7:
            console.log(`Hoje é Sábado`);
            break;
        }
}
else{
    var semana = Number(prompt(`Digite novamente um número entre 1 e 7:`));
}