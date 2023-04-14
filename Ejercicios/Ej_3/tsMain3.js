"use strict";
function getCantVocales(cadena) {
    const vocales = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú'];
    let count = 0;
    for (let i = 0; i < cadena.length; i++) {
        if (vocales.includes(cadena[i].toLowerCase())) {
            count++;
        }
    }
    return "Se encontraron " + count + " vocales";
}
console.log(getCantVocales("Esto es una prueba de código"));
console.log(getCantVocales("Esta es otra prueba"));
console.log(getCantVocales("tercera prueba con más acentos úíó"));
