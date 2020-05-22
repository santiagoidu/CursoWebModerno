/* Um funcionário irá receber um aumento de acordo com o seu plano de
trabalho, de acordo com a tabela abaixo:
Plano Aumento
A 10%
B 15%
C 20% 
Faça uma função que leia o plano de trabalho e o salário atual de um funcionário e calcula e imprime o seu
novo salário. Use a estrutura switch e faça um caso default que indique que o plano é inválido. */


function work(workPlan, currentWage){
    switch(workPlan){
        case 'Plan A':
            return `R$ ${currentWage + (currentWage / 100 * 10)}`
        case 'Plan B':
            return `R$ ${currentWage + (currentWage / 100 * 15)}`
        case 'Plan C':
            return `R$ ${currentWage + (currentWage / 100 * 20)}`
        default: 
            return `Invalid plan!`
    }
}

console.log(work('Plan C', 1000))
console.log(work('Plan A', 1000))
console.log(work('Plan B', 1000))
console.log(work('Plan D', 1000))
