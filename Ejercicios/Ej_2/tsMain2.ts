function getVillano( nombre: string, edad?: number, arma = "pistola" ) {
    var mensaje: string;
    if( edad ) {
        mensaje = nombre + " tiene una edad de: " + edad + " y arma: " + arma;
    } else {
        mensaje = nombre + " tiene un " + arma;
    }
    return mensaje;
};


console.log(getVillano("Rodrigo", 30));
console.log(getVillano("Eve", 26, "cuchillo"));
console.log(getVillano("Enzo"));
