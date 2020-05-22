/* Criar um programa para identificar o valor a ser pago por um plano de saúde dada a idade do conveniado
considerando que todos pagam R$ 100 mais um adicional conforme a seguinte tabela: 1) crianças com menos
de 10 anos pagam R$80; 2) conveniados com idade entre 10 e 30 anos pagam R$50; 3) conveniados com
idade acima de 30 e até 60 anos pagam R$ 95; e 4) conveniados acima de 60 anos pagam R$130 */

function healthInsurance(years){
    if (years < 10){
        return `Plan R$100 + R$80 additional. TOTAL R$${100 + 80}`
    } else if (years > 10 && years <= 30){
        return `Plan R$100 + R$50 additional. TOTAL R$${100 + 50}`
    } else if (years > 30 && years <= 60){
        return `Plan R$100 + R$95 additional. TOTAL R$${100 + 95}`
    } else if (years > 60) {
        return `Plan R$100 + R$130 additional. TOTAL R$${100 + 130}`
    }
}

console.log(healthInsurance(5))
console.log(healthInsurance(15))
console.log(healthInsurance(45))
console.log(healthInsurance(70))