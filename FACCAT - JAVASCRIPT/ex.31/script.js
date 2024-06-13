let lado1 = parseInt(prompt("Digite o valor do primeiro lado"))
let lado2 = parseInt(prompt("Digite o valor do segundo lado"))
let lado3 = parseInt(prompt("Digite o valor do terceiro lado"))

if((lado1 < lado2 + lado3)&& (lado2 < lado1 + lado3) && (lado3 < lado1 + lado2)){
    alert("Os valores formam um triângulo △")
} else {
    alert("Os valores não formam um triângulo")
}