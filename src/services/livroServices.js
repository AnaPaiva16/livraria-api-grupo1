const Livro = require("../models/Livro");

const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
];

function listarTodos() {
  return livros;
}

function buscarLivroPorIndice(indice) {
  return livros[indice];
}

function listarLivros(filtros) {
  let resultado = livros;
<<<<<<< HEAD
  
=======
>>>>>>> 8e24511a7e3d4ff4dd82715dbee60cdb5522e21d
  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 8e24511a7e3d4ff4dd82715dbee60cdb5522e21d
  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }
<<<<<<< HEAD

=======
>>>>>>> 8e24511a7e3d4ff4dd82715dbee60cdb5522e21d
  return resultado;
}

function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  livros.push(novoLivro);
  return novoLivro;
}

// IMPLEMENTAÇÃO DO PUT (Substitui todo o objeto)
function atualizarLivroCompleto(indice, dados) {
  if (!livros[indice]) return null;

  const livroAtualizado = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  livros[indice] = livroAtualizado;
  return livroAtualizado;
}

// IMPLEMENTAÇÃO DO PATCH (Modificação parcial usando os setters)
function atualizarLivroParcial(indice, dados) {
  const livro = livros[indice];
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco; // Usa o set preco
  if (dados.estoque !== undefined) livro.estoque = dados.estoque; // Usa o set estoque

  return livro;
}

// IMPLEMENTAÇÃO DO DELETE
function deletarLivro(indice) {
  if (!livros[indice]) return false;

  livros.splice(indice, 1);
  return true;
}

module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorIndice,
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};
