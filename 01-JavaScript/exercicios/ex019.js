/*O cardápio de uma lanchonete é o seguinte:

Código          Descrição do Produto         Preço

100              Cachorro Quente            R$ 3,00
200             Hambúrguer Simples          R$ 4,00
300               Cheeseburguer             R$ 5,50
400                  Bauru                  R$ 7,50
500               Refrigerante              R$ 3,50
600                   Suco                  R$ 2,80

Implemente uma função que receba como parâmetros o código do item pedido, a quantidade e calcule o valor
a ser pago por aquele lanche. Considere que a cada execução somente será calculado um item. Use o
comando switch. Crie um caso default para produto não existente. */

function order(code, quantity,){
    switch(code){
        case 100:
            return `Cachorro Quente | Total price R$${3.00 * quantity}`
        case 200:
            return `Hambúrguer Simples | Total price R$${4.00 * quantity}`
        case 300:
            return `Cheeseburguer | Total price R$${5.50 * quantity}`
        case 400: 
            return `Bauru | Total price R$${7.50 * quantity}`
        case 500: 
            return `Refrigerante | Total price R$${3.50 * quantity}`
        case 600: 
            return `Suco | Total price R$${2.80 * quantity}`
        default:
            return "Product does not exist"
    }
}

console.log(order(600, 10))
console.log(order(500, 5))
console.log(order(400, 4))
console.log(order(300, 3))
console.log(order(200, 2))
console.log(order(100, 1))
console.log(order(1000, 50))
