var  salario = parseFloat(prompt("Digite o salario do funcionario: "))
var pReajuste = parseFloat(prompt("Digite a porcentagem de reajuste (de 0.00 até 1.00):"))
var salario_novo = salario + (salario * pReajuste)
alert("O valor com reajuste é de R$" + salario_novo + "e o reajuste foi de R$:" + (salario * pReajuste))