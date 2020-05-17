// par nome/valor
const saudacao = 'opa' // contexto léxico 1

function exec() {
    const saudacao = 'Falaaa' // contexto léxico 2
    return saudacao
}

// Objestor são grupos aninhdos de pares nome/valor
const cliente ={
    nome: 'Pedro',
    idade: 32,
    peso: 90,
    endereco: {
        logadoro: 'Rua muito legal',
        numero: 123
    }
}

console.log(saudacao)
console.log(exec())
console.log(cliente)