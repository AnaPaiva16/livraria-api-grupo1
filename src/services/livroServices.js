const { db } = require("../config/db");

// 1. Listar Livros com filtros direto no banco
async function listarLivros(filtros) {
  const [linhas] = await db.query("SELECT * FROM livros");
  let resultado = linhas;

  if (filtros && filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase())
    );
  }

  if (filtros && filtros.titulo) {
    resultado = resultado.filter((livro) =>
      livro.titulo.toLowerCase().includes(filtros.titulo.toLowerCase())
    );
  }

  if (filtros && filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax)
    );
  }

  return resultado;
}

// 2. Listar todos chama a função de listagem sem filtros
async function listarTodos() {
  return await listarLivros();
}

// 3. Buscar Livro por ID 
async function buscarLivroPorId(id) {
  const [linhas] = await db.query("SELECT * FROM livros WHERE id = ?", [id]);
  return linhas[0];
}

// 4. Criar Livro direto no Banco de Dados
async function criarLivro(dados) {
  const [resultado] = await db.query(
    "INSERT INTO livros (titulo, autor, preco, estoque) VALUES (?, ?, ?, ?)",
    [dados.titulo, dados.autor, dados.preco, dados.estoque]
  );
  
  return await buscarLivroPorId(resultado.insertId);
}

// 5. Atualizar completo pelo id no Banco de Dados
async function atualizarLivroCompleto(id, dados) {
  const [resultado] = await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, id]
  );

  if (resultado.affectedRows === 0) return null;
  
  return await buscarLivroPorId(id);
}

// 6. Atualizar parcial pelo id
async function atualizarLivroParcial(id, dados) {
  const livro = await buscarLivroPorId(id);
  if (!livro) return null;

  const titulo = dados.titulo !== undefined ? dados.titulo : livro.titulo;
  const autor = dados.autor !== undefined ? dados.autor : livro.autor;
  const preco = dados.preco !== undefined ? dados.preco : livro.preco;
  const estoque = dados.estoque !== undefined ? dados.estoque : livro.estoque;

  await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ? WHERE id = ?",
    [titulo, autor, preco, estoque, id]
  );

  return await buscarLivroPorId(id);
}

// 7. Apagar pelo id no Banco de Dados
async function deletarLivro(id) {
  const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
  return resultado.affectedRows > 0; 
}

module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};
