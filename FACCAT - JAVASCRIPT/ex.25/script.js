numero_conta = parseFloat(prompt("Digite o numero da conta do cliente"))
saldo = parseFloat(prompt("Digite o saldo do cliente"))
debito = parseFloat(prompt("Digite o debito do cliente"))
credito = parseFloat(prompt("Digite o credito do cliente"))
saldo_atual = parseFloat

saldo_atual = saldo - debito + credito
alert(`Saldo atual de ${saldo_atual} reais`)

if(saldo_atual < 0){
    alert("Saldo negativo")
}else{
    alert("Saldo positivo")
}

