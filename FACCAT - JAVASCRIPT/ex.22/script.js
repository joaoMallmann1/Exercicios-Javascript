let horasTrabalhadas = parseInt(prompt("Digite o valor de horas trabalhadas do funcionario no mes"))
let salarioHora = parseFloat(prompt("Digite o valor do salario hora do funcionario"))
let horasExtras = parseInt
let acrescimo = parseFloat
let total = parseFloat

if(horasTrabalhadas > 40){
    horasExtras = horasTrabalhadas - 40
    acrescimo = (salarioHora * horasExtras) * 0.5
    total = ((horasExtras + horasTrabalhadas) * salarioHora) + acrescimo
    alert(`O salario deste funcionario no mês foi de ${total.toFixed(2)} reais`)
}else{
    total = horasTrabalhadas * salarioHora
    alert(`O salario deste funcionario no mês foi de ${total.toFixed(2)} reais`)
}