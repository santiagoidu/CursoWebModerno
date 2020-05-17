const nome = 'Rebeca'
const concatenacao = 'OLa ' + nome + '!'

/*com tamplate string considera todas quebras de linha, espaço em brancos, tabs...
Porque alem do fato  interpolar (converte a varivel dentro do propio texto) ele 
considera as quebras de linha*/
const tamplate = `
    Olá
    ${nome}!`

console.log(concatenacao, tamplate)

// expressões...
console.log(`1 + 1= ${1 + 1}`)

const up = texto => texto.toUpperCase()
console.log(`Ei... ${up('cuidado')}!`)