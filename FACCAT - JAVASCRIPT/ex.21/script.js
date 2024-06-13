let inicio = parseInt(prompt("Digite a hora de inicio da partida (00 - 24): "))
let fim = parseInt(prompt("Digite a hora de finalização da partida (00 - 24): "))
let duracao = parseInt
let dia_seguinte = parseInt

if(fim < inicio){
    dia_seguinte = 24
    duracao = (dia_seguinte - inicio) + fim
} else{
    duracao = fim - inicio
}

alert(`A duração da partida foi de ${duracao} horas`)