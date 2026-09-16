// ROTA: recebe a requisição HTTP para Categorias.
// Aqui vão ficar os caminhos (endpoints) relacionadas a Categoria.
// Ex: GET /categorias, POST /categorias
// Implementação chega no Bloco 3, quando o banco de dados entrar.

const express = require('express');
const categoriaController = require("../controllers/categoriaController");

const router = express.Router();

// Vincula a rota GET ao método do controller
router.get('/categorias', categoriaController.getCategorias);

// Exporta o router para ser usado no index.js
module.exports = router;