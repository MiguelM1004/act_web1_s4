function retrasar(msj, tiempo) {
    setTimeout(function() {
        console.log("Mensaje retrasado:", msj);
    }, tiempo);
}
retrasar("Hola después de 2s", 2000);