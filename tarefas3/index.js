console.log('Ola Mundo!');

const tarefaService = require('./tarefa.service');
const express = require("express");
const cors = require('cors');

const app = express();

app.use(express.json());

const corsOptions = {
    origin: 'http://127.0.0.1:5500'
}
app.use(cors(corsOptions))

// Nos decidimos o verbo
// Nos decidimos a rota
app.get("/ola", (req, res) => {
    // nos decidimos o retorno
    res.json({ message: "ola :-D" });
});

app.post("/somar", (req, res) => {
    const soma = req.body.numero1 + req.body.numero2;
    res.json({resultado: soma});
})

app.get("/tarefas", async (req, res) => {
    res.json(await tarefaService.buscarTarefas());
})

app.get("/tarefas/total", async (req, res) => {
    res.json(await tarefaService.buscarTotalTarefas());
})

app.post("/tarefas", async (req, res) => {
    res.json(await tarefaService.incluirTarefa(req.body.titulo));
})

app.patch("/tarefas/:id/concluir", async (req, res) => {
    res.json(await tarefaService.concluirTarefa(req.params.id));
})

app.delete("/tarefas/:id", async (req, res) => {
    res.json(await tarefaService.excluirTarefa(req.params.id));
})

// Iniciar o servidor na porta
const port = 3000;
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});