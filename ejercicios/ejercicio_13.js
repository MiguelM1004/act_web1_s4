const guiones = function(texto) {
    return texto.replace(/ /g, "-");
};
console.log("Guiones:", guiones("Hola Mundo"));