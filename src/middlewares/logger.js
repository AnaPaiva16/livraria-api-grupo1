function logger(req, res, next) {
    const dataHora = new Date().toISOString(); //202660916-07:58:34
    console.log(`[${dataHora}] ${req.method} ${req.originalUrl}`);
    next();
}

module.exports = logger;