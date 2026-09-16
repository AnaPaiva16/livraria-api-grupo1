// ROTA: recebe a requisição HTTP para Categorias.
// Aqui vão ficar os caminhos (endpoints) relacionadas a Categoria.
// Ex: GET /categorias, POST /categorias
// Implementação chega no Bloco 3, quando o banco de dados entrar.

const express = require('express');
const categoriaController = require("../controllers/categoriaController");

const router = express.Router();

router.get('/categorias', (req, res) => {
    res.send('Rota de categorias funcionando!');
});

// Exporta o router para ser usado no index.js
module.exports = router;