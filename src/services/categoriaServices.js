// Exemplo de banco de dados temporário de categorias na memória
const categorias = [
  { nome: "Tecnologia" },
  { nome: "Ficção" }
];

function listarCategorias() {
  return categorias;
}

function buscarCategoriaPorIndice(indice) {
  return categorias[indice];
}

function criarCategoria(dados) {
  const novaCategoria = { nome: dados.nome };
  categorias.push(novaCategoria);
  return novaCategoria;
}

function atualizarCategoriaCompleta(indice, dados) {
  if (!categorias[indice]) return null;
  categorias[indice] = { nome: dados.nome };
  return categorias[indice];
}

function deletarCategoria(indice) {
  if (!categorias[indice]) return false;
  categorias.splice(indice, 1);
  return true;
}

module.exports = {
  listarCategorias,
  buscarCategoriaPorIndice,
  criarCategoria,
  atualizarCategoriaCompleta,
  deletarCategoria
};
