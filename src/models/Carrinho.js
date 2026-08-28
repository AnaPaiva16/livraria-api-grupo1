// OK: Métodos pequenos com responsabilidade única
class Carrinho {
  #livros;

  constructor() {
    this.#livros = [];
  }

  adicionarLivro(livro) {
    this.#livros.push(livro);
  }

  // EXTRA B: Método para remover livro pelo título usando .filter()
  removerLivro(titulo) {
    this.#livros = this.#livros.filter((livro) => livro.titulo !== titulo);
  }

  listar() {
    // EXTRA A: Validação de carrinho vazio
    if (this.#livros.length === 0) {
      console.log("O carrinho está vazio.");
      return;
    }

    console.log("--- Itens do carrinho ---");
    this.#livros.forEach((livro) => {
      console.log(livro.titulo + " - R$ " + livro.preco);
    });
  }

  calcularTotal() {
    // EXTRA A: Se o carrinho estiver vazio, retorna 0 de forma segura
    if (this.#livros.length === 0) {
      return 0;
    }

    let total = 0;
    this.#livros.forEach((livro) => {
      total = total + livro.preco;
    });
    return total;
  }
}

module.exports = Carrinho;
