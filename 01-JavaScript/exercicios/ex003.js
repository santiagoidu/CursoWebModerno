//Crie uma função que recebe dois parâmetros, base e expoente, e retorne a base elevada ao expoente

function potenciaOld(n1, n2) {
    let resultado = Math.pow(n1, n2)
    return resultado
}

console.log(potenciaOld(2, 3))

// ES7

function pontenciaNew(base, expoente) {
    return base **= expoente
}

console.log(pontenciaNew(2, 3))