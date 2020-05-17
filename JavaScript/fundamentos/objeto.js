/*Objeto é uma coleção de chave valor voce tem o nome do indetificador e voce passa um
valor pra ele que pode ser um texto, booleanos, string etc. Um objeto pode ter um outro 
objeto dentro dele exemplo: um objeto produto e dentro desse objeto ter um outro objeto
definindo a categoria*/
const prod1 = {}
prod1.nome = 'Celular Ultra Mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaço 

console.log(prod1)

const prod2 = {
    nome: 'camisa polo',
    preco: 79.90
}

console.log(prod2)