/*Exemplo : Eu quero que ele já me tire de dentro do objeto o atributo
 Min e o atributo Max já me entregue esses dois atributos prontos*/
function rand({ min = 0, max = 1000 }){
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand({ min: 955}))
console.log(rand({}))
console.log(rand())
