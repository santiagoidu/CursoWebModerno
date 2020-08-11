/* A variavel var dentro de um bloco de codigo que nõ seja uma função ela ficara visivel
pra todo mundo que tiver mesmo fora daquele bloco */
{ 
    { 
        { 
            {
                 var sera = 'Sera???' 
            } 
        } 
    } 
}

console.log(sera)

// Variavel var dentro de uma function so é visivel dentro da funcao
function teste() {
    var local = 123
}
teste()
console.log(local)