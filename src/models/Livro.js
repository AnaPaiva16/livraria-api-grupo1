// OK: Encapsulamento das propriedades #preco e #estoque protegendo o acesso direto
class Livro {
    #preco;
    #estoque;

    // Adicionado um valor padrão '= null' para categoria, evitando erros caso não seja enviado no Postman
    constructor(titulo, autor, preco, estoque, categoria = null) {
        this.titulo = titulo;
        this.autor = autor;
        this.#preco = preco;
        this.#estoque = estoque;
        this.categoria = categoria; 
    }

    // Corrigido para usar Template Literals (crases `` e \${}) em vez de concatenação com '+'
    descrever() {
        console.log(`Titulo: ${this.titulo}`);
        console.log(`Autor: ${this.autor}`);
        console.log(`Preco: R$ ${this.#preco}`);
        console.log(`Estoque: ${this.#estoque} unidades`);
        // Verificação segura caso a categoria seja null
        console.log(`Categoria: ${this.categoria ? this.categoria.nome : "Nenhuma"}`);
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

    // ADICIONADO: Método set estoque exigido pela atividade
    set estoque(novoEstoque) {
        if (novoEstoque < 0) {
            console.log("ERRO: O estoque não pode ser negativo.");
            return;
        }
        this.#estoque = novoEstoque;
    }

    // Movido para dentro da classe Livro
    // Atualizado para incluir a categoria no retorno do JSON caso ela exista
    toJSON() {
        return {
            titulo: this.titulo,
            autor: this.autor,
            preco: this.#preco,
            estoque: this.#estoque,
            categoria: this.categoria
        };
    }
}

module.exports = Livro;