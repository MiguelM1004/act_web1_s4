function multiplicarArreglo(lista) {
    return lista.reduce((acc, val) => acc * val, 1);
}
console.log("Multiplicación arreglo:", multiplicarArreglo([2,3,4]));