// importa para o nosso programa
// a ferramenta para conectar no BD
const mysql = require('mysql2/promise');
const config = require('./config');

async function buscarTarefas() {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute('SELECT * FROM tarefas');
    connection.end();
    console.log(result[0]);
}

async function buscarTarefa(id) {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute('SELECT * FROM tarefas WHERE id = ' + id);
    connection.end();
    console.log(result[0]);
}

async function incluirTarefa(titulo) {
}

async function excluirTarefa(id) {
}

async function concluirTarefa(id) {
}

module.exports = {
    buscarTarefas,
    buscarTarefa
}