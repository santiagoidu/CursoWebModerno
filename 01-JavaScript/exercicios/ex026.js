// Fazer um programa para encontrar todos os pares entre 1 e 100.

function pares() {
    let i = 0
    while (i <= 100) {
        if (i % 2 == 0) {
            console.log(i)
        }
        i++
    }
}

pares()