const scanf = require("scanf");

console.log('Digite seu nome');
var nome = scanf('%S'); // %S - Ler uma string                        

console.log('Digite sua idade');
var idade = scanf('%d'); // %d - Ler um número

console.log('Bem vindo ' + nome);
console.log('Sua idade é ' + idade);