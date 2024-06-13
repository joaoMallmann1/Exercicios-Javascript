let valor1 = parseFloat(prompt("Digite o primeiro valor: "))
let valor2 = parseFloat(prompt("Digite o segundo valor: "))
let valor3 = parseFloat(prompt("Digite o terceiro valor: "))
if(valor1 == valor2 && valor2 == valor3){
    alert("Todos os valores são iguais")
}else if(valor1 == valor2){
    alert("O primeiro valor é igual ao segundo")
} else if(valor1 == valor3){
    alert("O primeiro valor é igual ao terceiro")
}else if(valor2 == valor3){
    alert("O segundo valor é igual ao terceiro")
} 

if(valor1 > valor2 && valor2 > valor3){
    alert(`A ordem crescente dos valores é de ${valor3}, ${valor2} e ${valor1}`)
}else if(valor1 > valor3 && valor3 > valor2){
    alert(`A ordem crescente dos valores é de ${valor2}, ${valor3} e ${valor1}`)
}else if(valor2 > valor1 && valor1 > valor3){
    alert(`A ordem crescente dos valores é de ${valor3}, ${valor1} e ${valor2}`)
}else if(valor2 > valor3 && valor3 > valor1){
    alert(`A ordem crescente dos valores é de ${valor1}, ${valor3} e ${valor2}`)
}else if(valor3 > valor2 && valor2 > valor1){
    alert(`A ordem crescente dos valores é de ${valor1}, ${valor2} e ${valor3}`)
}else if(valor3 > valor1 && valor1 > valor2){
    alert(`A ordem crescente dos valores é de ${valor2}, ${valor1} e ${valor3}`)
}

