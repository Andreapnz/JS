let inteiro = 10
console.log(inteiro)
let soma = inteiro + 2
let subtracao = inteiro - 2
let multiplicacao = inteiro * 2
let divisao = inteiro / 2

//console.log('soma de inteiro + 10 = ' + (inteiro + 10))

let prontoFloat = 10.5

let numString = '10'
let somaString = numString + 2
// o operador + concatena e soma
// concatena palavras mais qualquer coisa
// soma números
let subtracaoString = numString - 2
let multiplicacaoString = numString * 2
let divisaoString = numString / 2

console.log(somaString)
console.log(subtracaoString)
console.log(multiplicacaoString)
console.log(divisaoString)


// converentdo string para number
let n1 = '10' // inteiro
let n2 = '20.5' // float

// o JS compreende essas strings de numeros como numeros para operações matemáticas (subqtração, multiplicação, divisão) mas para soma realiza concatenação
console.log(n1 + 1) // 101
console.log(n2 - 1) // 19.5
console.log(n1 *10) // 100
console.log(n2 / 10) // 2.05

// para os casos de operações com numeros no formato string, é necessário converter para number  

let numero1convertido = Number(n1) // '10' -> 10
let numero2convertido = Number(n2) // '20.5' -> 20.5
console.log(numero1convertido + 1) // 11
console.log(numero2convertido + 1)  // 21.5


//crie uma variavel que peça o salario do usuario e converta para number
// em seguida adicione mais 1000 dinheiros ao salario e mostre no console

// Solicita o salário do usuário 
let salario = prompt("Digite o seu salário:"); 
// Converte o salário para número 
salario = Number(salario);
// Verifica se a conversão foi bem-sucedida 
if (isNaN(salario)) { console.log("Valor inválido. Certifique-se de digitar um número."); } 
else { 
// Adiciona 1000 ao salário 
salario = salario + 1000
// Exibe o novo salário no console 
console.log("Seu novo salário é:", salario); } 

