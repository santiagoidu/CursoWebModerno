console.log(7 / 0.00001) //Quanto mais voce se aproxima de um valor 0 vai dar um numero grande

console.log(7 / 0) // Js retorna infinito 

//de fato vai pergar conteudo de uma string e transforma em um number 
console.log("10" / 2)  
console.log (0.1 + 0.7) /*nao vai dar 0.8 por quanta da especificação da operação do tipo
de ponto flutuante que java script suporta se ele fosse procurar a precisão se fosse 100% 
preciso ficaria muito mais lento especificação I3E)*/

// console.log(10.toString())

console.log((10).toFixed(2))

console.log('3' + 2) // O operado aritmetico + nao vai somar vai concatenar(string ganha!) 