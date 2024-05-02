// Atividade 04
// Crie um programa que solicite ao usuário que insira o raio de um círculo
// usando o prompt e, em seguida, calcule e exiba a área do círculo usando o
// console.


const π = 3.14159265358979323846;
var raio = parseFloat(prompt(`Informe o raio:`));
while (isNaN(raio)){
    var raio = parseFloat(prompt(`ERRRO! | Informe o raio:`));
}
var areaC = π*(raio**2);
console.log(`A área do seu círculo é: ${areaC}`)