//Var indetificador recebe simbolo de atribuição o numero 3
var a = 3 
/*o mesmo do cometario de cima, como REGRA GERAL crie variaveis ultilizando let
evite uso de VAR*/
let b = 4 

/*Quando voce trabalha com var embora nao faz menor sentido
voce pode redeclarar dentro de um mesmo escopo uma variaveis duas vezes
coisa que nao acontece em outras linguagens*/  
var a = 30 
b = 40

console.log(a, b)

/*Voce declara variavel e pode usar quantas vezes quiser,
 pelo fato de ser variavel voce pode ficar mudando o valor*/
a = 300
b = 400
 console.log(a, b)

 /*TUDO AQUILO que você não tem um motivo para mudar dentro do seu algoritmo comece
 colocando uma constante*/
 const c = 5
// c = 50 (por ser uma constate voce nao consegue atribuir um novo valor)
console.log(c)