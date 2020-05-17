let contador = 1
// repetidor whille
while(contador <= 10) {
    console.log(`contador = ${contador}`)
    contador++
}
// forma de repetir ate chegar ao desejado
for(let i = 1; i <= 10; i++) {
    console.log(`i = ${i}`)
}
//Uma das formas de navegar pelo array (a opções melhores)
const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i = 0; i < notas.length; i++) {
    console.log(`nota = ${notas[i]}`)
}