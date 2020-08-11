/*Faça um programa que leia um número entre 0 e 10, e escreva este número por extenso. Use o comando
switch. Crie um case default que escreva ‘Número fora do intervalo. */

function numberReader(number){
    switch(number){
        case 0:
            return 'Zero'
        case 1: 
            return 'One'
        case 2: 
            return 'Two'
        case 3: 
            return 'Three'
        case 4: 
            return 'Four'
        case 5: 
            return 'Five'
        case 6:
            return 'Six'
        case 7: 
            return 'Seven'
        case 8:
            return 'Eight'
        case 9:
            return 'Nine'
        case 10: 
            return 'Ten'
        default: 
           return 'Number out of range.'
    }
}

console.log(numberReader(11))
console.log(numberReader(10))
console.log(numberReader(9))
console.log(numberReader(8))
console.log(numberReader(7))
console.log(numberReader(6))
console.log(numberReader(5))
console.log(numberReader(4))
console.log(numberReader(3))
console.log(numberReader(2))
console.log(numberReader(1))
console.log(numberReader(0))
