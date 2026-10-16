const Livro = require("../models/Livro");

const livros = [];
let proximoId = 1;

function listarTodos() {
  return livros;
}

// 3.3 — Buscar pelo id
function buscarLivroPorId(id) {
  return livros.find((livro) => livro.id === Number(id));
}

function listarLivros(filtros) {
  let resultado = livros;
  
  if (filtros.autor) {
    resultado = resultado.filter((livro) =>
      livro.autor.toLowerCase().includes(filtros.autor.toLowerCase()),
    );
  }

  if (filtros.precoMax) {
    resultado = resultado.filter(
      (livro) => livro.preco <= Number(filtros.precoMax),
    );
  }

  return resultado;
}

function criarLivro(dados) {
  const novoLivro = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  novoLivro.id = proximoId;
  proximoId++;
  livros.push(novoLivro);
  return novoLivro;
}

// 3.4 — Atualizar completo pelo id
function atualizarLivroCompleto(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;

  const posicao = livros.findIndex((l) => l.id === Number(id));

  const livroAtualizado = new Livro(
    dados.titulo,
    dados.autor,
    dados.preco,
    dados.estoque,
  );
  livroAtualizado.id = livro.id; 
  livros[posicao] = livroAtualizado;
  return livroAtualizado;
}

// 3.4 — Atualizar parcial pelo id
function atualizarLivroParcial(id, dados) {
  const livro = buscarLivroPorId(id);
  if (!livro) return null;

  if (dados.titulo !== undefined) livro.titulo = dados.titulo;
  if (dados.autor !== undefined) livro.autor = dados.autor;
  if (dados.preco !== undefined) livro.preco = dados.preco;
  if (dados.estoque !== undefined) livro.estoque = dados.estoque;

  return livro;
}

// 3.4 — Apagar pelo id
function deletarLivro(id) {
  const posicao = livros.findIndex((livro) => livro.id === Number(id));
  if (posicao === -1) return false;

  livros.splice(posicao, 1);
  return true;
}

criarLivro({ 
  titulo: "Clean Code", 
  autor: "Robert C. Martin", 
  preco: 89.9, 
  estoque: 12 });

criarLivro({ 
  titulo: "Eloquent JavaScript", 
  autor: "Marijn Haverbeke", 
  preco: 45.0, 
  estoque: 20 });

// Exportações atualizadas conforme a última imagem!
module.exports = {
  listarTodos,
  listarLivros,
  buscarLivroPorId, 
  criarLivro,
  atualizarLivroCompleto,
  atualizarLivroParcial,
  deletarLivro,
};