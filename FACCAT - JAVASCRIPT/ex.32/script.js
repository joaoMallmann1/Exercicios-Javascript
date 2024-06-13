let timeA = prompt("Digite o nome do time 1")
let timeB = prompt("Digite o nome do time 2")
let gols_A = parseInt(prompt(`Digite a quantidade de gols que o time ${timeA} fez`))
let gols_B = parseInt(prompt(`Digite a quantidade de gols que o time ${timeB} fez`))

if(gols_A > gols_B){
    alert(`O time ${timeA} está ganhando do ${timeB} de ${gols_A} a ${gols_B}`)
} else if(gols_B > gols_A){
    alert(`O time ${timeB} está ganhando do ${timeA} de ${gols_B} a ${gols_A}`)
} else{
    alert("O jogo está empatado")
}