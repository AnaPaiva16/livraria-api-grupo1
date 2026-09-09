// SERVICE (o "cozinheiro"): executa a logica de verdade.
// Aqui vai ficar a logica de verdade: buscar, calcular, validar.
// Implementação chega no Bloco 3.

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
 
module.exports = { listarLivros, buscarLivroPorIndice };