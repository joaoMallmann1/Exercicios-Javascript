salarioFixo = parseFloat(prompt("Digite o salario fixo: "))
valor_vendas = parseFloat(prompt("Digite o valor de suas vendas neste mês: "))
comissao = parseFloat
total = parseFloat

if(valor_vendas <= 1500){
    comissao = 0.03 * valor_vendas
    total = salarioFixo + comissao
}else{
    comissao = 0.05 * valor_vendas
    total = salarioFixo + comissao
}

alert(`Seu salário este mês, baseado no salario + comissao, foi de ${total} reais`)