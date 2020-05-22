/*Crie uma função que verifica se um número inteiro passado como parêmetro é divisível por 3 e retorne true
ou false.*/

function divisivelpor3(num){
    if(num % 3 == 0){
        return true
    } else {
        return false
    }
}

console.log(divisivelpor3(6))
console.log(divisivelpor3(3))
console.log(divisivelpor3(14))
console.log(divisivelpor3(15))