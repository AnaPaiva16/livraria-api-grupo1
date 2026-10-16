class Categoria {
  #id; // Adicionado para suportar o this.id
  #nome;
  #descricao;

  // Atualizado para receber o id (ajuste conforme a assinatura do seu projeto)
  constructor(id, nome, descricao) {
    this.#id = id;
    this.#nome = nome;
    this.#descricao = descricao;
  }

  // Getter para o id
  get id() {
    return this.#id;
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

  // Adicionado logo abaixo do set nome conforme a imagem
  set descricao(novaDescricao) {
    this.#descricao = novaDescricao;
  }

  // Implementação do toJSON() com o id na primeira linha
  toJSON() {
    return {
      id: this.id, // ou this.#id
      nome: this.#nome,
      descricao: this.#descricao
    };
  }

  descrever() {
    console.log("Categoria: " + this.#nome);
    console.log("Descrição: " + this.#descricao);
  }
}

module.exports = Categoria;
