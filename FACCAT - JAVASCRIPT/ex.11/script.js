/*Cálculo  de salário com comissão*/
var carros_vendidos = parseFloat(prompt("Digite a qtd de carros vendidos: "))
var valor_total_vendas = parseFloat(prompt("Valor total com as vendas do funcionario: "))
var salario_fixo = parseFloat(prompt("Salario fixo do funcioanrio: "))
var valor_carro_comissao = parseFloat(prompt("Digite o valor da comissão fixa dos carros"))

valor_total_vendas = valor_total_vendas * 0.05
salario_final = salario_fixo + valor_total_vendas + valor_carro_comissao
alert("O salario final deste funcionário será de: R$ " + parseFloat(salario_final))