function rotaNaoEncontrada(req, res, next) {
  // Retorna estritamente um objeto JSON com o status 404
  return res.status(404).json({ erro: "Rota não encontrada" });
}

module.exports = rotaNaoEncontrada;
