const valores = [7.7, 8.9, 6.3, 9.2]
console.log(valores[0], valores[3])
console.log(valores[4])

valores[4] = 10
console.log(valores)
console.log(valores.length) //acessar a quantidade de um array usando com .length

//Função de array pra adicionar novos elementos
valores.push({id: 3}, false, null, 'teste')
console.log(valores)

//.pop() retira o ultimo elemento de um array
console.log(valores.pop())

/*Uma forma de excluir elemento de um array é usando o delete "nomeDaVariavel" 
["N°doIndice"]*/
delete valores[0]
console.log(valores)

//tipo Objeto
console.log (typeof valores)