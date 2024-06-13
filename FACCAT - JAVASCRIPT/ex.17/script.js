let nota1 = parseFloat(prompt("Digite o valor da primeira nota: "))
let nota2 = parseFloat(prompt("Digite o valor da segunda nota: "))
let media = (nota1 + nota2)/2

alert("A média do aluno foi de "+ media)
if(media>=6){
    alert("Aluno aprovado")
}else{
    alert("Aluno não aprovado")

}