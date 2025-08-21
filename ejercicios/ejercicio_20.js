const calcularProm = arr => arr.reduce((a,b) => a+b, 0) / arr.length;
console.log("Promedio:", calcularProm([10,20,30]));