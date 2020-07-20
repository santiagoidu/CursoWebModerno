function funcionarOuNao(valor, chanceErro) {
    return new Promise((resolve, reject) => {
        try{
            con.log('temp')
            if(Math.random() < chanceErro) {
                reject('Ocorreu um erro!')
            } else {
                resolve(valor)
            }
        } catch(e) {
            reject(e)
        }
    })
}

funcionarOuNao('testando...', 0.5)
    .then(v =>console.log(`Valor: ${v}`))
    .then(
        v => consol.log(v),
        err => console.log(`Erro Esp.: ${err}`)
        )
    .then(() => console.log('Quase fim!'))
    .catch(err => console.log(`Erro Geral: ${err}`))
    .then(() => console.log('Fim'))
