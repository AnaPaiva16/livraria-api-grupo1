require("dotenv").config();

const { testarConexao } = require("./config/db");
const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");
const rotaNaoEncontrada = require("./middlewares/rotaNaoEncontrada");
const tratarErros = require("./tratarErros"); // Importação do seu middleware de erros

const app = express();
const PORTA = 3000;

app.use(express.json());
app.use(logger);
app.use(routes);

app.get("/", (req, res) => {
    // req é requisição e res é resposta.
    res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
    res.send("Página Sobre a Livraria");
});

// Caso não encontre nenhuma rota acima, devolve 404 Not Found
app.use(rotaNaoEncontrada);

// Intercepta qualquer erro que aconteça nas rotas ou no banco (DEVE SER O ÚLTIMO MIDDLEWARE)
app.use(tratarErros);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
    
    // Executa o teste de conexão assim que o servidor iniciar
    testarConexao();
});
