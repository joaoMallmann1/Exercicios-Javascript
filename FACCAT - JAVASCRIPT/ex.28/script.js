let valor1 = parseFloat(prompt("Digite o primeiro valor:"))
let valor2 = parseFloat(prompt("Digite o segundo valor:"))
let valor3 = parseFloat(prompt("Digite o terceiro valor:"))

if(valor1>valor2 && valor1 > valor3){
    alert("O maior valor é " + valor1)
} else if(valor2 > valor1 && valor2 > valor3){
    alert("O maior valor é " + valor2)
} else if (valor3 > valor2 && valor3 > valor1) {
    alert("O maior valor é " + valor3)
} else {
    alert("Não existe valor superior numericamente")
}