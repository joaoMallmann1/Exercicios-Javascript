var eleitores = parseInt(prompt("Digite a qtd de eleitores"))
var brancos = parseInt(prompt("Digite a qtd de votos brancos"))
var nulos = parseInt(prompt("Digite a qtd de votos nulos"))
var validos = parseInt(prompt("Digite a qtd de votos validos"))

var porcentagem_branco = (brancos * 100 / eleitores)
var porcentagem_nulos = (nulos * 100 / eleitores)
var porcentagem_validos = (validos * 100 / eleitores)

alert("A porcentagem de votos brancos é de  " + porcentagem_branco)
alert("A porcentagem de votos nulos é de  " + porcentagem_nulos)
alert("A porcentagem de votos validos é de  " + porcentagem_validos)

