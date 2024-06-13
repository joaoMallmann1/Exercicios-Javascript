function lerValor(){
    return parseFloat(prompt("Digite um valor:"))
}

function encontrarMaior(){
    if (valor1 > valor2) {
        return valor1;
    } else {
        return valor2;
    }
}

function encontrarMenor(){
    if(valor1 < valor2){
        return valor1;
    }else{
        return valor2;
    }
}

let valor1 = lerValor()
let valor2 = lerValor()

var maior = encontrarMaior(valor1, valor2)
var menor = encontrarMenor(valor1, valor2)
alert(`O maior valor é ${maior} e o menor é ${menor}`)