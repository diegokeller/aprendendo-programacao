// importa para o nosso programa
// a ferramenta para conectar no BD
const mysql = require('mysql2/promise');
const config = require('./config');

async function buscarTarefas() {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute('SELECT * FROM tarefas');
    connection.end();
    return result[0];
}

async function buscarTotalTarefas() {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute('SELECT COUNT(*) as total FROM tarefas');
    connection.end();
    return result[0];
}

async function buscarTarefa(id) {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute('SELECT * FROM tarefas WHERE id = ' + id);
    connection.end();
    return result[0];
}

async function incluirTarefa(titulo) {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute(
        `INSERT INTO tarefas (titulo, criada_em, concluida) VALUES ('${titulo}', NOW(), 0)`);
    connection.end();
    return result[0];
}

async function excluirTarefa(id) {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute(
        'DELETE FROM tarefas WHERE id = ' + id);
    connection.end();
    return result[0];
}

async function concluirTarefa(id) {
    const connection = await mysql.createConnection(config.db);
    const result = await connection.execute(
        'UPDATE tarefas SET concluida = 1 WHERE id = ' + id);
    connection.end();
    return result[0];
}

module.exports = {
    buscarTarefas,
    buscarTarefa,
    concluirTarefa,
    excluirTarefa,
    incluirTarefa,
    buscarTotalTarefas
}