/*As maçãs custam R$ 1,30 cada se forem compradas menos de uma dúzia, e R$ 1,00 se forem
compradas pelo menos 12. Escreva um programa que leia o número de maçãs compradas, calcule e
escreva o custo total da compra. */

let compradas = parseInt(prompt("Digite o numero de maçãs compradas: "))
let preco = parseFloat
let custoTotal

if (compradas < 12){
    preco = 1.30
    custoTotal = compradas * preco
    alert(`${compradas} maçãs foram adquiridas sob um custo de R$ ${custoTotal.toFixed(2)}`)
} else{
    preco = 1
    custoTotal = compradas * preco
    alert(`${compradas} maçãs foram adquiridas sob um custo de R$ ${custoTotal.toFixed(2)}`)
}