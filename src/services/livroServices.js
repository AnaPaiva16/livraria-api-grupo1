const { db } = require("../config/db");

// 1. Listar Livros com filtros direto no banco
async function listarLivros(filtros) {
  const [linhas] = await db.query(
    "SELECT livros.*, categorias.nome AS categoria FROM livros LEFT JOIN categorias ON livros.categoria_id = categorias.id"
  );
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

  if (filtros && filtros.categoria) {
    resultado = resultado.filter(
      (livro) =>
        livro.categoria !== null &&
        livro.categoria.toLowerCase().includes(filtros.categoria.toLowerCase())
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
  const [linhas] = await db.query(
    "SELECT livros.*, categorias.nome AS categoria FROM livros LEFT JOIN categorias ON livros.categoria_id = categorias.id WHERE livros.id = ?",
    [id]
  );
  return linhas[0];
}

// 4. Validar dados do Livro
function validarLivro(dados, completo) {
  if (!dados) return "Envie os dados do livro em JSON";

  if (completo) {
    if (!dados.titulo) return "O titulo e obrigatorio";
    if (!dados.autor) return "O autor e obrigatorio";
    if (dados.preco === undefined) return "O preco e obrigatorio";
    if (dados.estoque === undefined) return "O estoque e obrigatorio";
  }

  if (dados.titulo !== undefined && (typeof dados.titulo !== "string" || dados.titulo.length < 2)) {
    return "O titulo deve ter pelo menos 2 letras";
  }

  if (dados.autor !== undefined && (typeof dados.autor !== "string" || dados.autor.length < 2)) {
    return "O autor deve ter pelo menos 2 letras";
  }

  if (dados.preco !== undefined && (typeof dados.preco !== "number" || dados.preco < 0)) {
    return "O preco deve ser um numero positivo";
  }

  if (dados.estoque !== undefined && (typeof dados.estoque !== "number" || dados.estoque < 0)) {
    return "O estoque deve ser um numero positivo";
  }

  if (
    dados.categoria_id !== undefined &&
    dados.categoria_id !== null &&
    typeof dados.categoria_id !== "number"
  ) {
    return "O categoria_id deve ser um numero";
  }

  return null;
}

// 5. Criar Livro direto no Banco de Dados
async function criarLivro(dados) {
  const [resultado] = await db.query(
    "INSERT INTO livros (titulo, autor, preco, estoque, categoria_id) VALUES (?, ?, ?, ?, ?)",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, dados.categoria_id]
  );

  return await buscarLivroPorId(resultado.insertId);
}

// 6. Atualizar completo pelo id no Banco de Dados
async function atualizarLivroCompleto(id, dados) {
  const [resultado] = await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ?, categoria_id = ? WHERE id = ?",
    [dados.titulo, dados.autor, dados.preco, dados.estoque, dados.categoria_id, id]
  );

  if (resultado.affectedRows === 0) return null;

  return await buscarLivroPorId(id);
}

// 7. Atualizar parcial pelo id
async function atualizarLivroParcial(id, dados) {
  const livro = await buscarLivroPorId(id);

  if (!livro) return null;

  const titulo = dados.titulo !== undefined ? dados.titulo : livro.titulo;
  const autor = dados.autor !== undefined ? dados.autor : livro.autor;
  const preco = dados.preco !== undefined ? dados.preco : livro.preco;
  const estoque = dados.estoque !== undefined ? dados.estoque : livro.estoque;
  const categoria_id =
    dados.categoria_id !== undefined ? dados.categoria_id : livro.categoria_id;

  await db.query(
    "UPDATE livros SET titulo = ?, autor = ?, preco = ?, estoque = ?, categoria_id = ? WHERE id = ?",
    [titulo, autor, preco, estoque, categoria_id, id]
  );

  return await buscarLivroPorId(id);
}

// 8. Apagar pelo id no Banco de Dados
async function deletarLivro(id) {
  const [resultado] = await db.query("DELETE FROM livros WHERE id = ?", [id]);
  return resultado.affectedRows > 0;
}

module.exports = {
  validarLivro,
  listarTodos,
  listarLivros,
  buscarLivroPorId,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};
