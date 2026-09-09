const express = require("express");
const livroRoutes = require("./routes/livroRoutes");

const app = express();

app.use(express.json());

const PORTA = 3000;

app.use("/livros", livroRoutes);

app.get("/", (req, res) => {
    // req é requisição e res é resposta.
    res.send("API da Livraria no ar!");
});

app.get("/sobre", (req, res) => {
    res.send("Página Sobre a Livraria");
});

app.listen(PORTA, () => {
    console.log(`Servidor rodando em http://localhost:${PORTA}`);
});