/*Crie uma função que irá receber dois valores, o dividendo e o divisor. A função deverá imprimir o resultado
e o resto da divisão destes dois valores.*/

function calc1(dividendo, divisor) {
let resultado = `
A divisão entre ${dividendo} e ${divisor} é ${dividendo / divisor}.
E o resto da divisão deste números é ${dividendo % divisor} `
return resultado
}

console.log(calc1(10, 2))
