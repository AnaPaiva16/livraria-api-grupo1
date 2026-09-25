const express = require("express");
const categoriaController = require("../controllers/categoriaController");

const router = express.Router();

router.get("/", categoriaController.listar);
router.get("/:indice", categoriaController.buscarPorIndice);
router.post("/", categoriaController.criar);
router.put("/:indice", categoriaController.atualizar);
router.patch("/:indice", categoriaController.atualizar); // Para categorias simples, o PATCH pode reutilizar a mesma lógica do PUT
router.delete("/:indice", categoriaController.deletar);

module.exports = router;
