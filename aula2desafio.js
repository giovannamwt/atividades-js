// O usuário deve ser capaz de escolher uma opção e inserir os valores necessários para realizar o cálculo
// correspondente. Utilize condicionais para direcionar o programa com base na escolha do usuário.

console.log(`MENU:`)
console.log(`1 | Calcular Área do Triângulo`)
console.log(`2 | Calcular Área do Retângulo`) 
console.log(`3 | Calcular Volume do Cubo`) 
console.log(`4 | Calcular Área do Círculo`) 
console.log(`5 | Sair`)

var option = Number(prompt(`Digite um número do MENU:`))

while (isNaN(option)){
    var option = Number(prompt(`ERRRO! | Digite um número do MENU:`));
}

if (option > 0 && option < 6){
    switch (option){
        case 1:
            var base = parseFloat(prompt(`Informe a base:`));
            var altura = parseFloat(prompt(`Informe a altura:`));
            var areaT = (base * altura)/2;
            console.log(`A área do seu triângulo é: ${areaT}`)
            break;
        case 2:
            var base = parseFloat(prompt(`Informe a base:`));
            var altura = parseFloat(prompt(`Informe a altura:`));
            var areaR = base * altura;
            console.log(`A área do seu retângulo é: ${areaR}`)
            break;
        case 3:
            var aresta = parseFloat(prompt(`Informe o comprimento da aresta:`));
            var volume = aresta**3;
            console.log(`O volume do cubo é: ${volume}`)
            break;
        case 4:
            const π = 3.14159265358979323846;
            var raio = parseFloat(prompt(`Informe o raio:`));
            var areaC = π*(raio**2);
            console.log(`A área do seu círculo é: ${areaC}`)
            break;
        case 5:
            console.log(`Adeus`)
            break;
}}
else{
    var option = Number(prompt(`ERRRO! | Digite um número do MENU:`));
}
