const Livro = require("../models/Livro");

const livros = [
  new Livro("Clean Code", "Robert C. Martin", 89.9, 12),
  new Livro("Eloquent JavaScript", "Marijn Haverbeke", 45.0, 20),
];

function listarLivros() {
  return livros;
}

function buscarLivroPorIndice(indice) {
  return livros[indice];
}

function criarLivro(dados) {
  const novoLivro = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
  livros.push(novoLivro);
  return novoLivro;
}

// IMPLEMENTAÇÃO DO PUT (Substitui todo o objeto)
function atualizarLivroCompleto(indice, dados) {
  if (!livros[indice]) return null;
  
  const livroAtualizado = new Livro(dados.titulo, dados.autor, dados.preco, dados.estoque);
  livros[indice] = livroAtualizado;
  return livroAtualizado;
}

// IMPLEMENTAÇÃO DO PATCH (Modificação parcial usando os setters)
function atualizarLivroParcial(indice, dados) {
  const livro = livros[indice];
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;     // Usa o set preco
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
  listarLivros, 
  buscarLivroPorIndice, 
  criarLivro, 
  atualizarLivroCompleto, 
  atualizarLivroParcial, 
  deletarLivro 
};
