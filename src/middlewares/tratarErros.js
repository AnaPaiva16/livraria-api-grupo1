function tratarErros(err, req, res, next) {
  // Mostra o código e a mensagem real do erro no terminal do servidor
  console.log("ERRO:", err.code, err.message);

  // 1. Banco de dados desligado ou inacessível (Erro de infraestrutura)
  if (err.code === "ECONNREFUSED") {
    res.status(503).json({ erro: "Banco de dados indisponivel" });
    return;
  }

  // 2. Dados enviados maiores que o limite das colunas (Erro do cliente)
  if (err.code === "ER_DATA_TOO_LONG" || err.code === "ER_WARN_DATA_OUT_OF_RANGE") {
    res.status(400).json({ erro: "Algum valor e grande demais para o banco" });
    return;
  }

  // 3. JSON enviado no corpo da requisição está mal formatado (Erro do Express)
  if (err.type === "entity.parse.failed") {
    res.status(400).json({ erro: "O JSON enviado esta mal escrito" });
    return;
  }

  // 4. Qualquer outro erro não mapeado (Erro interno do servidor)
  res.status(500).json({ erro: "Erro interno no servidor" });
}

module.exports = tratarErros;
