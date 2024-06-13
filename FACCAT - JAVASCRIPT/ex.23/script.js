let name = String(prompt("Digite o nome do individuo"))
let sex = String(prompt("Digite o sexo do individuo (M ou F)"))
let altura = parseFloat(prompt("Digite a altura do individuo"))
let peso_ideal = parseFloat


if(sex = 'M'){
    peso_ideal = (72.7 * altura) - 58
    alert(`O peso ideal deste homem é de ${peso_ideal.toFixed(2)} kg`)
} else{
    peso_ideal = (62.1 * altura) - 44.7
    alert(`O peso ideal desta mulher é de ${peso_ideal.toFixed(2)} kg`)
}