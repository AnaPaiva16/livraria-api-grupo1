// OK: Encapsulamento das propriedades #preco e #estoque protegendo o acesso direto
class Livro {
    #preco;
    #estoque;

    constructor(titulo, autor, preco, estoque, categoria) {
        this.titulo = titulo;
        this.autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
        this.categoria = categoria; 
    }

    // Corrigido para usar Template Literals (crases `` e ${}) em vez de concatenação com '+'
    descrever() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Preco: R$ ${this.#preco}`);
        console.log(`Estoque: ${this.#estoque} unidades`);
        console.log(`Categoria: ${this.categoria.nome}`);
    }

    valorEmEstoque() {
        return this.#preco * this.#estoque;
    }

    get preco() {
        return this.#preco;
    }

    get estoque() {
        return this.#estoque;
    }

    set preco(novoPreco) {
        if (novoPreco < 0) {
            console.log("ERRO: O preço não pode ser negativo.");
            return;
        }
        this.#preco = novoPreco;
    }

    // Movido para dentro da classe Livro
    toJSON() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            preco: this.#preco,
            estoque: this.#estoque
        };
    }
}

module.exports = Livro;