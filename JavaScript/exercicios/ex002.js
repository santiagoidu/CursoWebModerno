/*Os triângulos podem ser classificados em 3 tipos quanto ao tamanho de seus lados:
       
        -Equilátero: Os três lados são iguais. 
        -Isósceles: Dois lados iguais. 
        -Escaleno: Todos os lados são diferentes.

    Crie uma função que recebe os comprimentos dos três lados de um triângulo e retorne sua classificação quanto
ao tamanho de seus lados. (Neste exemplo deve-se abstrair as condições matemáticas de existência de um
triângulo). */


function triangulo(x , y , z){
    if (x === y && x === z && y === z){
        return `
        _______________________________________________________________
        |                     Triângulo Equilátero.                   |
        |-------------------------------------------------------------|
        |Os três lados são iguais:                                    |
        |O lado X possui ${x} de tamanho.                                |
        |O lado Y possui ${y} de tamanho.                                |
        |O lado Z possui ${z} de tamanho.                                |
        |-------------------------------------------------------------|
        `
    } else if (x === y || x === z || z === y){
       return `
        _____________________________________________________________
        |                      Triângulo Isósceles.                  |
        |------------------------------------------------------------|
        |Dois lados são iguais:                                      |
        | O lado X possui ${x} de tamanho.                              |
        | O lado Y possui ${y} de tamanho.                              |
        | O lado Z possui ${z} de tamanho.                              |
        |------------------------------------------------------------|
       `
    } else if ( x != y && x != z && z != y) {
        return `
        ______________________________________________________________
        |                      Triângulo Escaleno.                    |
        |-------------------------------------------------------------|
        |Todos os lados são diferentes:                               |
        |O lado X possui ${x} de tamanho.                                |
        |O lado Y possui ${y} de tamanho.                                |
        |O lado Z possui ${z} de tamanho.                               |
        |-------------------------------------------------------------|
        `
    } else if ( x !== Number || y !== Number || z !== Number){
        return `
        _______________________________________
       |                Atenção!!!             |
       |---------------------------------------|
       | Verifique os dados e tente novamente! |
       |---------------------------------------|
       `
    }
}

console.log(triangulo(5, 5, 5))
console.log(triangulo(5, 4, 5))
console.log(triangulo(1, 5, 10))
console.log(triangulo([], '', '0'))

