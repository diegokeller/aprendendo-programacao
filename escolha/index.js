var nome = 'Diego';
var idade = 18;

// Criar data de hoje
var hoje = new Date();
console.log(hoje);

// 11 - Dezembro
// Criar com uma data qualquer
var ontem = new Date(2022, 11, 7, 8, 20, 21);
var amanha = new Date(2022, 11, 9, 8, 20, 21);
console.log(ontem);

// Pegar informacoes da data
var ano = hoje.getFullYear();
console.log(ano);

// Pegar o dia da semana
var diaSemana = amanha.getDay();
console.log(diaSemana);

// O dia da semana e quinta-feira
// 4 -> Quinta Feira

// if (diaSemana == 3) {
//     console.log('Quarta-feira');
// }
// if (diaSemana == 4) {
//     console.log('Quinta-feira');
// }

// if (diaSemana == 3) {
//     console.log('Quarta-feira');
// } else if (diaSemana == 4) {
//     console.log('Quinta-feira');
// } else if (diaSemana == 5) {
//     console.log('Sexta-feira');
// }

// SWITCH - ESCOLHA
switch (diaSemana) {
    case 3: 
        console.log('Quarta');
        break;
    case 4: 
        console.log('Quinta');
        break;
    case 5: 
        console.log('Sexta');
        break;
    default: 
        console.log('Esse dia nao existe');
}

// Outra forma
var diasDaSemana = [
    'Domingo', 'Segunda', 'Terca', 
    'Quarta', 'Quinta', 'Sexta', 'Sabado'
];

console.log('Dia da semana com array ' + diasDaSemana[diaSemana]);

var letra = 'A';
switch(letra) {
    case 'A':
        console.log(`A`);
        break;
    case 'B':
        console.log(`B`);
        break;
}