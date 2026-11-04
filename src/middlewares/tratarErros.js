function tratarErros(err, req, res, next) {
    // Parte 2: Linha opcional para mostrar o código no terminal (útil para o Integrante 1)
    console.log("ERRO:", err.code); 

    // Banco desligado / Porta errada
    if (err.code === "ECONNREFUSED") {
        res.status(503).json({ erro: "Banco de dados indisponivel" });
        return;
    }

    // Título ou Preço grande demais para o banco
    if (err.code === "ER_DATA_TOO_LONG" || err.code === "ER_WARN_DATA_OUT_OF_RANGE") {
        res.status(400).json({ erro: "Algum valor e grande demais para o banco" });
        return;
    }

    // Erro genérico (Qualquer outro erro que aconteça no servidor)
    res.status(500).json({ erro: "Erro interno no servidor" });
}

module.exports = tratarErros;
