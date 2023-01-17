const scanf = require("scanf");
const { listar, adicionar, excluir, mostrarMenu } = require("./tarefas.lib");

const opcoes = [
    'Listar tarefas',
    'Adicionar uma nova tarefa',
    'Excluir uma tarefa',
    'Sair'
];

while (true) {

    mostrarMenu(opcoes);

    let opcao = scanf('%s');
    switch(opcao) {
        case `l`:
            listar();
            break;
        case `a`:
            adicionar();
            break;
        case `e`:
            excluir();
            break;
        case `s`:
            return;
        default:
            console.log('Opcao invalida');
    }
}