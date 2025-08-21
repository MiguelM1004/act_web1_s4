function validarCorreo(cadena) {
    return cadena.includes("@") && cadena.endsWith(".com");
}
console.log("¿Correo válido?", validarCorreo("test@example.com"));
console.log("¿Correo válido?", validarCorreo("prueba@correo.co"));