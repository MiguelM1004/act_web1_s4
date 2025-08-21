function contarVocales(txt, i = 0) {
    if (i >= txt.length) return 0;
    return "aeiou".includes(txt[i].toLowerCase()) 
        ? 1 + contarVocales(txt, i+1) 
        : contarVocales(txt, i+1);
}
console.log("Vocales:", contarVocales("hola"));