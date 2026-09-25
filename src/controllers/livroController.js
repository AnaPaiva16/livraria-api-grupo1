const livroService = require("../services/livroServices");

function listar(req, res) {
  const livros = livroService.listarLivros();
  res.json(livros);
}

function buscarPorIndice(req, res) {
  const indice = req.params.indice;
  const livro = livroService.buscarLivroPorIndice(indice);
  
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
  const indice = req.params.indice;
  const livroAtualizado = livroService.atualizarLivroCompleto(indice, req.body);
  
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO PATCH
function atualizarParcial(req, res) {
  const indice = req.params.indice;
  const livroAtualizado = livroService.atualizarLivroParcial(indice, req.body);
  
  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// CONTROLADOR DO DELETE
function deletar(req, res) {
  const indice = req.params.indice;
  const excluido = livroService.deletarLivro(indice);
  
  if (!excluido) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(204).send(); // Status 204 não retorna corpo/JSON
}

module.exports = { 
  listar, 
  buscarPorIndice, 
  criar, 
  atualizarCompleto, 
  atualizarParcial, 
  deletar 
};
