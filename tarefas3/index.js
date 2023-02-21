console.log('Ola Mundo!');

const tarefaService = require('./tarefa.service');

(async function() {
    await tarefaService.buscarTarefa(3);
})();