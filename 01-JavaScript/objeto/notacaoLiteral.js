const a = 1
const b = 2
const c = 3

const obj1 = {a: a, b: b, c: c}
const obj2 = {a, b, b}
console.log(obj1, obj2)

const nomeAtri = 'Nota'
const valorAtri = 7.87

const obj3 = {}
obj3[nomeAtri] = valorAtri

const obj4 = {[nomeAtri]: valorAtri}

const obj5 = {
    funcao1: function(){
        //..
    },
    funcao2(){
        //...
    }
}

console.log(obj5)