var abacaxi;

// funcoes
//      index.js

// Programas ---- Linhas de código Muitas...... Muitas.......
// Funcoes: são pequenos programas que podemos reutilizar várias vezes

/*

    Programa: Passar café
        1. Esquentar água
        2. Colocar o pó do café na cafeteira/filtro
        3. Colocar água na cafeteira / filtro

    Programa: Sanduíche
        1. Abrir o pão
        2. Colocar ingredientes/recheio
        3. Fechar o pão

    Programa: Café da manhã
        1. -> Passar café 
        2. -> Sanduíche

    Programa: Alimentação
        1. Café da manhã
        2. Almoço
        3. Janta

*/

// Prática

import { imprimirHoje } from "../biblioteca/data.mjs";
import { ehPar } from "../biblioteca/matematica.mjs";

// Passa parâmetros para a função
console.log(ehPar(4));
console.log(ehPar(7));
console.log(ehPar(7));

var nome = 'Diego';
imprimirHoje(nome);
imprimirHoje('Maurício');

if (nome == 'Diego') {
    var abacaxi = 34;
} else {
    let idade = 30;
    console.log(idade);
}

console.log(abacaxi);
