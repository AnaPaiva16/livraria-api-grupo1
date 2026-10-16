const livroService = require("../services/livroServices");

// function listar(req, res) {
//   const livros = livroService.listarLivros();
//   res.json(livros);
// }

function listar(req, res) {
const filtros = req.query;
const livros = livroService.listarLivros(filtros);
res.status(200).json(livros);
}

// 2. Renomeado para buscarPorId e chamando livroService.buscarLivroPorId
function buscarPorId(req, res) {
  const id = req.params.id; // 1. Trocado req.params.indice por req.params.id
  const livro = livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.json(livro);
}

function criar(req, res) {
  const novoLivro = livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

// CONTROLADOR DO PUT
function atualizarCompleto(req, res) {
  const id = req.params.id; // 1. Trocado req.params.indice por req.params.id
  const livroAtualizado = livroService.atualizarLivroCompleto(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO PATCH
function atualizarParcial(req, res) {
  const id = req.params.id; // 1. Trocado req.params.indice por req.params.id
  const livroAtualizado = livroService.atualizarLivroParcial(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO DELETE
function deletar(req, res) {
  const id = req.params.id; // 1. Trocado req.params.indice por req.params.id
  const excluido = livroService.deletarLivro(id);

  if (!excluido) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(204).send(); // Status 204 não retorna corpo/JSON
}

module.exports = {
  listar,
  buscarPorId, // 3. Trocado buscarPorIndice por buscarPorId
  criar,
  atualizarCompleto,
  atualizarParcial,
  deletar,
};
