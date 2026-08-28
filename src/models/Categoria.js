class Categoria {
    #nome;
    #descricao;
    
    constructor(nome, descricao){
     this.#nome = nome;
     this.#descricao = descricao;
    }

    get nome() {
        return this.#nome;
    }
    
    get descricao() {
        return this.#descricao;
    }
    
    set nome(novoNome) {
        if (novoNome.length < 3) {
            console.log("ERRO: o nome da categoria precisa de pelo menos 3 letras.");
            return;
        }
        this.#nome = novoNome;
    }
 
    descrever() {
            console.log("Categoria: " + this.#nome);
            console.log("Descrição: " + this.#descricao);
    }

}

module.exports = Categoria;