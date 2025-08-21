const nuevoId = (function() {
    let id = 0;
    return function() {
        id++;
        return id;
    };
})();
console.log("ID generado:", nuevoId());
console.log("ID generado:", nuevoId());