// CONTROLLER: decide o que fazer com pedidos de Categoria.
const categoriaService = require("../services/categoriaServices");

const getCategorias = (req, res) => {
    try {
        const categorias = categoriaService.listarCategorias();
        res.status(200).json(categorias);
    } catch (error) {
        res.status(500).json({ message: "Erro ao listar categorias." });
    }
};

module.exports = {
    getCategorias
};