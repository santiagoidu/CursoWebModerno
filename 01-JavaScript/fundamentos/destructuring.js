// novo recurso do ES2015

const pessoa = {
    nome: 'Ana',
    idade: 5,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 1000
    }
}
// forma de tirar de dentro do objeto o atribudo desejado
const { nome, idade } = pessoa
console.log(nome, idade)

/*alem de tirar de dentro do objeto quantos atributos desejado pode atribuir a 
esses atributos uma variavel*/ 
const {nome: n, idade: i} = pessoa
console.log(n, i)

/*caso tente extrair um atributo de um objeto que nao existe o resultado
 padrao do java script o resultado retorna undefined*/
const { sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

/*caso nos quiser acessar e extrair um atribudo de um objeto que esta
 localizado em um subbjeto assim pode chamar se faz desta maneira*/
const { endereco: { logadouro, numero, cep} } = pessoa
console.log(logadouro, numero, cep)
