/*Elabore duas funções que recebem três parâmetros: capital inicial, taxa de juros e tempo de aplicação. A
primeira função retornará o montante da aplicação financeira sob o regime de juros simples e a segunda
retornará o valor da aplicação sob o regime de juros compostos.*/

function JurosSimples(c, i, t) {
    let tot = c + (i * t)
    return tot
}

console.log(JurosSimples(100, 10, 2))
/* S = montante, P = principal, i = taxa de juros e n = número de períodos 
que o principal P (capital inicial) foi aplicado.*/

function JurosComposto(capital, taxaJuros, tempoAplicacao) {
    let montante = capital * Math.pow((1 + taxaJuros), tempoAplicacao)
    let tot = montante.toString()
    return tot
}

console.log(JurosComposto(100, 10, 2))