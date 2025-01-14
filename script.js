// arquivo externo de js

// funções output (pega a infomeção dentro do arquivo script e exibe para o usuário)
// mostrar infomação na tela do naebgador
//console.log(''); // exibe no console do navegador


console.log('Olá, mundo!');
console.log("Olá, a cada passo que dou, estou mais perto de me tornar uma grande programadora!");
//alert('Olá, mundo!'); // exibe um alerta na tela do navegador   

// funções input

// prompt(''); // exibe um campo de texto para o usuário inserir informações
// prompt - capta uma infomação do usuário digitada no formato de texto
// confirm(''); // exibe um alerta com botões de confirmação
// confimr - capta uma informação do usuário no formato de booleano (true ou false)

// variáveis
// são caixinhas de memorias que armazenam informações

// var, let e const

// variáveis

let x = 10
console.log(x)
x = 100
console.log(x)

//let x = 20  // não pode redeclarar uma variável com let

var y = 20
console.log(y)
var y = 'minha senha'
console.log(y)  

const pi = 3.14
console.log(pi)
//pi = 'minha senha'


// Declaração das variáveis
let nome = 'Andréa' 
let idade = 30                              
let email = 'andrea_pnz@hotmail.com'         
let dataNascimento = '30/01/1995'           


//Exibir as informaçõe no console
console.log('O nome é '+ nome)
console.log('A idade é ' + idade)
console.log('O email é ' + email)
console.log('A data de nascimento e' + dataNascimento)

let textUsuario = prompt('Digite seu nome')

// atualize os valores das variáveis nome, idade, email
// utilizando o prompt

nome = prompt('Digite seu nome?')
idade = prompt('Digite sua idade?')
email = prompt('Digite seu email?')

console.log('O nome é '+ nome)  
console.log('A idade é ' + idade)
console.log('O email é ' + email)
