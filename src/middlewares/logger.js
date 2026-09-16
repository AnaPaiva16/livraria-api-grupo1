function logger(req, res, next) {
    const dataHora = new Date().toISOString();
    
    // 1. Marca o início da requisição (em milissegundos)
    const inicio = performance.now();

    // 2. Escuta o evento "finish", disparado quando a resposta é enviada ao cliente
    res.on("finish", () => {
        // 3. Calcula o tempo decorrido
        const tempoResposta = (performance.now() - inicio).toFixed(2);
        
        // 4. Exibe o log completo atualizado
        console.log(`[${dataHora}] ${req.method} ${req.originalUrl} - ${tempoResposta}ms`);
    });

    next();
}

module.exports = logger;