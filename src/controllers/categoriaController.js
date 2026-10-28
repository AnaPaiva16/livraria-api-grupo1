const categoriaService = require("../services/categoriaServices");

function listar(req, res) {
  const filtros = req.query;
  const livros = categoriaService.listarCategorias(filtros);
  res.status(200).json(livros);
}

function buscarPorId(req, res) {
  const id = req.params.id;
  const livro = categoriaService.buscarCategoriaPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.json(livro);
}

function criar(req, res) {
  // --- ACRESCENTADO: VALIDAÇÕES DA CATEGORIA (Pasta 3 - Erros) ---
  const { nome } = req.body;

  // 1. Validar se o nome não foi enviado ou está vazio
  if (!nome || typeof nome !== 'string' || nome.trim() === '') {
    return res.status(400).json({ erro: "O nome da categoria é obrigatório." });
  }

  // 2. Validar se o nome é muito curto (menos de 3 caracteres)
  if (nome.trim().length < 3) {
    return res.status(400).json({ erro: "O nome da categoria deve ter pelo menos 3 caracteres." });
  }
  // ---------------------------------------------------------------

  const novoLivro = categoriaService.criarCategoria(req.body);
  res.status(201).json(novoLivro);
}

// CONTROLADOR DO PUT
function atualizarCompleto(req, res) {
  const id = req.params.id;
  // AJUSTADO: "atualizarCategoria" exatamente como na tabela do exercício
  const livroAtualizado = categoriaService.atualizarCategoria(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO PATCH
function atualizarParcial(req, res) {
  const id = req.params.id;
  // CORRETO: "atualizarParcialCategoria" conforme a tabela
  const livroAtualizado = categoriaService.atualizarParcialCategoria(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO DELETE
function deletar(req, res) {
  const id = req.params.id;
  const excluido = categoriaService.deletarCategoria(id);

  if (!excluido) {
    return res.status(404).json({ erro: "Categoria não encontrada" });
  }
  res.status(204).send();
}

module.exports = {
  listar,
  buscarPorId,
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
};
