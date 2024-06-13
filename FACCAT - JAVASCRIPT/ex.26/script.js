qtd_estoque = parseInt(prompt("Quantidade atual em estoque: "))
qtd_maxima = parseInt(prompt("Quantidade máxima do estoque: "))
qtd_min = parseInt(prompt("Quantidade minima em estoque: "))
qtd_media = parseInt(qtd_maxima + qtd_min)/2
alert(`A quantidade média do estoque é de ${qtd_media}`)
if(qtd_estoque>=qtd_media){
    alert("Não efetuar compra")
}else{
    alert("Efetuar compra")
}