const tecnologias = new Map()
tecnologias.set('React', {framework: false})
tecnologias.set('Angular', { framework: true })

console.log(tecnologias.react)
console.log(tecnologias.get('React').framework)

const chaveVariada = new Map([
    [function () {}, 'função'],
    [{}, 'Objeto'],
    [123, 'Número'],
])

chaveVariada.forEach((vl, ch) => {
    console.log(ch, vl)
})

console.log(chaveVariada.has(123))
chaveVariada.delete(123)
console.log(chaveVariada.has(123))
console.log(chaveVariada.size)

chaveVariada.set(123, 'a')
chaveVariada.set(123, 'b')
chaveVariada.set(456, 'b')
console.log(chaveVariada)