function operar(x, y, callback) {
    return callback(x, y);
}
console.log("Operación personalizada:", operar(5, 3, (a, b) => a * b));