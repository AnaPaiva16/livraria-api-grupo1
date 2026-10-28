require("dotenv").config();

const { testarConexao } = require("./config/db");
const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");
// --- ACRESCENTADO: IMPORTAÇÃO DO MIDDLEWARE ---
const rotaNaoEncontrada = require("./middlewares/rotaNaoEncontrada");

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

// --- ACRESCENTADO: CASO NÃO ENCONTRE NENHUMA ROTA ACIMA, DEVOLVE JSON ---
app.use(rotaNaoEncontrada);

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
   testarConexao(); 
});
