// SERVICE: Executa a lógica de Categoria.

// Lista simulada de categorias para o Bloco 2
const categoriasExemplo = [
    { id: 1, nome: "Ficção Científica" },
    { id: 2, nome: "Biografias" },
    { id: 3, nome: "História" }
];

const listarCategorias = () => {
    // Retorna a lista de categorias existentes
    return categoriasExemplo;
};

module.exports = {
    listarCategorias
};