<<<<<<< Updated upstream
require("dotenv").config();

const { testarConexao } = require("./config/db");
=======
// A primeira linha precisa carregar o dotenv para ler as senhas
require("dotenv").config();

>>>>>>> Stashed changes
const express = require("express");
const routes = require("./routes");
const logger = require("./middlewares/logger");
// --- ACRESCENTADO: IMPORTAÇÃO DO MIDDLEWARE ---
const rotaNaoEncontrada = require("./middlewares/rotaNaoEncontrada");

// Importa a função para testar a conexão com o banco de dados
const { testarConexao } = require("./config/db");

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
<<<<<<< Updated upstream
   testarConexao(); 
=======
    
    // Executa o teste de conexão assim que o servidor iniciar
    testarConexao();
>>>>>>> Stashed changes
});
