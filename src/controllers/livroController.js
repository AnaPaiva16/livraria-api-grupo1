const livroService = require("../services/livroServices");

// 1. LISTAR LIVROS 
async function listar(req, res) {
  const filtros = req.query;
  const livros = await livroService.listarLivros(filtros);
  res.status(200).json(livros);
}

// 2. BUSCAR POR ID 
async function buscarPorId(req, res) {
  const id = req.params.id; 
  const livro = await livroService.buscarLivroPorId(id);

  if (!livro) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.json(livro);
}

// 3. CRIAR LIVRO (Ajustado para o gabarito da atividade)
async function criar(req, res) {
  const { titulo, autor, preco, estoque } = req.body;

  // Validar Content-Type para evitar erro 500 caso venha vazio
  if (!req.is('json')) {
    return res.status(400).json({ erro: "Content-Type deve ser application/json" });
  }

  // Validação direta exigida pelo teste: se faltar o título ou qualquer outro dado obrigatório
  if (!titulo || !autor || preco === undefined || estoque === undefined) {
    return res.status(400).json({ erro: "Todos os campos (titulo, autor, preco, estoque) são obrigatórios." });
  }

  // Validar livro sem título ou com espaços vazios
  if (typeof titulo !== 'string' || titulo.trim() === '') {
    return res.status(400).json({ erro: "O título do livro é obrigatório." });
  }

  // Validar preço (negativo ou texto)
  if (typeof preco !== 'number' || isNaN(preco)) {
    return res.status(400).json({ erro: "O preço deve ser um número válido." });
  }
  if (preco < 0) {
    return res.status(400).json({ erro: "O preço não pode ser negativo." });
  }

  // O await já está certinho aqui!
  const novoLivro = await livroService.criarLivro(req.body);
  res.status(201).json(novoLivro);
}

// 4. CONTROLADOR DO PUT (Atualizado com async e await)
async function atualizarCompleto(req, res) {
  const id = req.params.id; 
  
  // Adicionado o await aqui!
  const livroAtualizado = await livroService.atualizarLivroCompleto(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// 5. CONTROLADOR DO PATCH (Atualizado com async e await)
async function atualizarParcial(req, res) {
  const id = req.params.id; 

  const { estoque } = req.body;
  if (estoque !== undefined && estoque < 0) {
    return res.status(400).json({ erro: "O estoque não pode ser negativo." });
  }

  // Adicionado o await 
  const livroAtualizado = await livroService.atualizarLivroParcial(id, req.body);

  if (!livroAtualizado) {
    return res.status(404).json({ erro: "Livro não encontrado" });
  }
  res.status(200).json(livroAtualizado);
}

// 6. CONTROLADOR DO DELETE (Atualizado com async e await)
async function deletar(req, res) {
  const id = req.params.id; 
  
  // Adicionado o await
  const excluido = await livroService.deletarLivro(id);

  if (!excluido) {
    return res.status(404).json({ erro: "Livro não encontrado" });
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
