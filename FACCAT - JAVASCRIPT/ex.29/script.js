let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: "))
let valor3 = parseFloat(prompt("Digite o terceiro valor: "))
let soma 
if(valor1 == valor2 && valor2 == valor3){
    alert("Todos os valores são iguais")
}else if(valor1 == valor2){
    alert("O primeiro valor é igual ao segundo")
} else if(valor1 == valor3){
    alert("O primeiro valor é igual ao terceiro")
}else if(valor2 == valor3){
    alert("O segundo valor é igual ao terceiro")
} else if (valor1 > valor3 && valor2 > valor3){
    soma = valor1 + valor2
    alert("A soma dos dois maiores valores foi de " + soma)
} else if (valor1 > valor2 && valor3 > valor2){
    soma = valor1 + valor3
    alert("A soma dos dois maiores valores foi de " + soma)
} else if(valor2 > valor1 && valor3 > valor1){
    soma = valor2 + valor3
    alert("A soma dos dois maiores valores foi de " + soma)
}

