// Crie uma função que dado dois valores (passados como parâmetros) mostre no console a soma, subtração, multiplicação e divisão desses valores.

function calc(a, b){
    return `
    Soma: ${a} + ${b} = ${a + b}
    Subtração: ${a} - ${b} = ${a - b}
    Multiplicação: ${a} x ${b} = ${a * b}
    Divisão: ${a} : ${b} = ${a / b}`
}

console.log(calc(1, 2))

