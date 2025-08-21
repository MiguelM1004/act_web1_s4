const crearContador = (function() {
    let contador = -1;
    return function() {
        contador++;
        return contador;
    };
})();
console.log("Contador:", crearContador());
console.log("Contador:", crearContador());