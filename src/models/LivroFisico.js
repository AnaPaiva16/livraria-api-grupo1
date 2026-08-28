    const Livro = require("./Livro");

    const TAXA_FRETE_POR_KG = 2.5;

    class LivroFisico extends Livro {
        #peso;

    constructor(titulo, autor, preco, estoque, categoria, peso) {
        super(titulo, autor, preco, estoque, categoria);
        this.#peso = peso;
    }

    get peso() {
        return this.#peso;
    }

    calcularFrete() {
        return this.#peso * TAXA_FRETE_POR_KG;
    }

    descrever() {
        super.descrever();
        console.log("Tipo: Fisico");
        console.log("Peso: " + this.#peso + "kg");
    }
}

module.exports = LivroFisico;