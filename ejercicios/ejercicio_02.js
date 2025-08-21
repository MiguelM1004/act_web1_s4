const saludarPersona = function(nombre = "Invitado") {
    return `¡Hola, ${nombre}!`;
};
console.log("Saludo:", saludarPersona());
console.log("Saludo:", saludarPersona("Ana"));