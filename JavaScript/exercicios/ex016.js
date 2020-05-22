/* ) Utilizando a estrutura do Switch faça um programa que simule uma calculadora básicaO programa recebe
como parâmetros dois valores numéricos e uma string referente à operação e a realize com os valores
numéricos na ordem que foram inseridos. Por exemplo: calculadora (2, ‘+’, 3). A função efetuará a soma de 2 e
3. Dica: Os sinais das operações são: ‘+’. ‘-’, ‘*’ e ‘/’. Crie um caso default para operações inválidas.*/

function calculator(n1, op, n2) {
    switch (op) {
        case '+':
            return `${n1 + n2}`
        case '-':
            return `${n1 - n2}`
        case ':':
            return `${n1 / n2}`
        case 'x':
            return `${n1 * n2}`
        default:
            return "Invalid operations."
    }
}

console.log(calculator(2,'-',2))
console.log(calculator(3, '+', 2))
console.log(calculator(10, ':', 2))
console.log(calculator(5, 'x', 5))