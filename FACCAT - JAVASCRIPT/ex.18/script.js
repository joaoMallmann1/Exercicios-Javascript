let ano = parseInt(prompt("Digite seu ano de nascimento"))

if(2024 - ano >=16){
    alert("Esta pessoa poderá votar")
}else if(2024 - ano >=18){
    alert("Esta pessoa deve votar")
}else if(2024 - ano < 16){
    alert("Esta pessoa ainda não vota")
}