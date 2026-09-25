const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const lista = categoriaService.listarCategorias();
  res.json(lista);
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const categoria = categoriaService.buscarCategoriaPorIndice(indice);
  
  if (!categoria) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.json(categoria);
}

function criar(req, res) {
  const novaCategoria = categoriaService.criarCategoria(req.body);
  res.status(201).json(novaCategoria);
}

function atualizar(req, res) {
  const indice = req.params.indice;
  const atualizada = categoriaService.atualizarCategoriaCompleta(indice, req.body);
  
  if (!atualizada) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(200).json(atualizada);
}

function deletar(req, res) {
  const indice = req.params.indice;
  const excluida = categoriaService.deletarCategoria(indice);
  
  if (!excluida) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorIndice,
  criar,
  atualizar,
  deletar
};
