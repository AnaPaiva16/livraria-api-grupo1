const livroService = require("../services/livroServices");

// function listar(req, res) {
//   const livros = livroService.listarLivros();
//   res.json(livros);
// }

// --- ATUALIZADO: GANHOU ASYNC E AWAIT PARA ESPERAR O BANCO DE DADOS ---
async function listar(req, res) {
  const filtros = req.query;
  const livros = await livroService.listarLivros(filtros);
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
  // --- ACRESCENTADO: VALIDAÇÕES DO LIVRO (Pasta 3 - Erros) ---
  
  // 1. Validar Content-Type para evitar erro 500 caso venha vazio
  if (!req.is('json')) {
    return res.status(400).json({ erro: "Content-Type deve ser application/json" });
  }

  const { titulo, preco } = req.body;

  // 2. Validar livro sem título
  if (!titulo || typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({ erro: "O título do livro é obrigatório." });
  }

  // 3. Validar preço (negativo ou texto)
  if (preco !== undefined) {
    if (typeof preco !== 'number' || isNaN(preco)) {
      return res.status(400).json({ erro: "O preço deve ser um número válido." });
    }
    if (preco < 0) {
      return res.status(400).json({ erro: "O preço não pode ser negativo." });
    }
  }
  // -----------------------------------------------------------

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

  // --- ACRESCENTADO: VALIDAÇÃO DE ESTOQUE NEGATIVO (Pasta 1 e 3) ---
  const { estoque } = req.body;
  if (estoque !== undefined && estoque < 0) {
    return res.status(400).json({ erro: "O estoque não pode ser negativo." });
  }
  // -----------------------------------------------------------------

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
