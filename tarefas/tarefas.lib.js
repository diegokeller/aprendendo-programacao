const fs = require('fs');
const scanf = require('scanf');

const SEPARADOR = '==================================================';
const ARQUIVO = `tarefas.txt`;

function lerDoArquivo() {
    return fs.readFileSync(ARQUIVO, 'utf-8').split(`\n`);
}

function escreverNoArquivo(tarefas) {
    fs.writeFileSync(ARQUIVO, tarefas.join(`\n`));
}

function mostrarMenu(opcoes) {
    console.log(SEPARADOR);
    console.log('Escolha uma opcao');
    for (let i = 0; i < opcoes.length; i++) {
        console.log(opcoes[i]);
    }
}

function listar() {
    console.log(SEPARADOR);
    console.log(`Listar`);
    const linhas = lerDoArquivo();
    for(var i = 0; i < linhas.length; i++) {
        console.log(i + ` - ` + linhas[i]);
    }
}

function excluir() {
    console.log(SEPARADOR);
    console.log(`Excluir`);
    console.log(`Digite o indice:`);
    listar();
    const i = scanf(`%d`);
    const linhas = lerDoArquivo();
    linhas.splice(i, 1);
    escreverNoArquivo(linhas);
    listar();
}

function adicionar() {
    console.log(SEPARADOR);
    console.log(`Adicionar`);
    console.log(`Digite a tarefa:`);
    const tarefa = scanf(`%S`);
    const linhas = lerDoArquivo();
    linhas.push(tarefa);
    escreverNoArquivo(linhas);
    listar();
}


module.exports = { listar, adicionar, excluir, mostrarMenu }