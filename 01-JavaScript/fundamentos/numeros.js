const peso1 = 1.0
const peso2 = Number('2.0')

console.log(peso1, peso2)

/*existe alguns metodos dentro de number que voce pode usar para fazer alguns testes
por exemplo: para saber se o valor de peso1 e o peso2 é interio ou nao*/
console.log(Number.isInteger(peso1))
console.log(Number.isInteger(peso2))

const avaliacao1 = 9.871
const avaliacao2 = 6.871

const total = avaliacao1 * peso1 + avaliacao2 * peso2
const media = total / (peso1 + peso2)

console.log(media)

/*Para tirar quantidade de casas decimais basta colocar .toFixed() e dentro do 
parenteses colocar quantidade de numeros decimais*/
console.log(media.toFixed(2))

/*se voce quiser transformar a media em uma string para um numero binario 
basta colocar .tostring(2)*/ 
console.log(media.toString(2)) //EM BINARIO

console.log(typeof media) // tipo do dado
console.log(typeof Number) // função
