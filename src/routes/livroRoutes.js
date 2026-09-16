// ROTA = o garcom: recebe a requicição HTTP.
// Aqui vão ficar os caminhos (endpoints) relacionados ao livro.
// Ex:GET /Livros, POST /Livros
// Implementação chega no Bloco 3, quando o banco de dados entrar.

const express = require("express");
const livroController = require("../controllers/livroController");

const router = express.Router();

router.get("/", livroController.listar);
router.get("/:indice", livroController.buscarPorIndice);

module.exports = router;