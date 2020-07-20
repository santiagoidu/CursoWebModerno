const { exec } = require("child_process")

function esperarPor(tempo = 2000) {
    return new Promise(function(resolve){
        setTimeout(function(){
            resolve()
        }, tempo)
    })

// esperarPor(2000)
//     .then(esperarPor)
//     .then(() =>  console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() =>  console.log('Executando promise...'))
//     .then(esperarPor)
//     .then(() =>  console.log('Executando promise...'))
function retornaValor(){
    return new Promise(resolve => {
        setTimeout(() => resolve(10), 5000)
    })
}

async function executar() {
    let valor = await retornaValorRapido() 

    await esperarPor(2000)
    console.log(`ASYNC/AWAIT ${valor}...`)

    await esperarPor(2000)
    console.log(`ASYNC/AWAIT ${valor}...`)

    await esperarPor(2000)
    console.log(`ASYNC/AWAIT ${valor}...`)

    return valor + 3
}

async function retornaValorRapido () {
    return 20
}

async function executarDeVerdade(){
    const valor = await executar()
}
executarDeVerdade()