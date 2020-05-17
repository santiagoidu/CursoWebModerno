const escola = "COd3r"

console.log(escola.charAt(4)) /*charAt significa que ele vai dar a letra que esta no
 indice quatro dentro da string*/

console.log(escola.charAt(5)) /*nao da erro mas retorna vazio (buscando caracter alem
 do que ta disponivel)*/

console.log(escola.charCodeAt(3)) //.charCodeAT informa codico relacionado a unicode

console.log(escola.indexOf("3")) /*.indexOf buscar indice em qual digito esta o que esta
 buscando (exemplo começando de 0(C), 1(O), 2(d), 3(3), 4(r)*/

 console.log(escola.substring(1)) // .substring define o inicio de leitura do caracter

 console.log(escola.substring(0,3)) /* .substring(0, outro numero) imprime o inicio e fim
  de uma string desejada */

console.log('Escola '.concat(escola).concat("!")) /*.concat concatena (forma alternativa do +) "objeto" 
   ao outro*/

console.log(escola.replace(3, 'e')) /* substitui o numero por qualquer outra coisa dentro
de aspas*/

console.log('Ana,Maria,Pedro'.split(',')) /* Para converter uma string em um array basta
colocar .split('') e dentro de ('') colocar qual vai ser o separador para gerar o array*/

