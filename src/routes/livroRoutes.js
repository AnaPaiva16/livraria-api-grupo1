const express = require("express");
const livroController = require("../controllers/livroController");

const router = express.Router();

router.get("/", livroController.listar);
router.get("/:id", livroController.buscarPorId); // Trocado /:indice por /:id e buscarPorIndice por buscarPorId
router.post("/", livroController.criar);
router.put("/:id", livroController.atualizarCompleto); // Trocado /:indice por /:id (mantido atualizarCompleto conforme seu arquivo)
router.patch("/:id", livroController.atualizarParcial); // Trocado /:indice por /:id
router.delete("/:id", livroController.deletar); // Trocado /:indice por /:id

module.exports = router;
