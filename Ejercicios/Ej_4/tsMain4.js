"use strict";
var Movimiento;
(function (Movimiento) {
    Movimiento[Movimiento["PIEDRA"] = 0] = "PIEDRA";
    Movimiento[Movimiento["PAPEL"] = 1] = "PAPEL";
    Movimiento[Movimiento["TIJERAS"] = 2] = "TIJERAS";
    Movimiento[Movimiento["NoVALIDO"] = 3] = "NoVALIDO";
})(Movimiento || (Movimiento = {}));
function parceoEnums(valor) {
    switch (valor.toUpperCase()) {
        case 'R':
            return Movimiento.PIEDRA;
            break;
        case 'P':
            return Movimiento.PAPEL;
            break;
        case 'S':
            return Movimiento.TIJERAS;
            break;
        default:
            return Movimiento.NoVALIDO;
            break;
    }
}
class Jugada {
    constructor(movimiento1, movimiento2) {
        this.jugador1 = parceoEnums(movimiento1);
        this.jugador2 = parceoEnums(movimiento2);
    }
}
function jugar(jugadas) {
    let contador1 = 0;
    let contador2 = 0;
    jugadas.forEach(jugada => {
        if (jugada.jugador1 == 2 && jugada.jugador2 == 0) {
            contador2++;
        }
        else if (jugada.jugador1 == 0 && jugada.jugador2 == 2) {
            contador1++;
        }
        else if (jugada.jugador1 < jugada.jugador2) {
            contador2++;
        }
        else if (jugada.jugador1 > jugada.jugador2) {
            contador1++;
        }
    });
    if (contador1 == contador2) {
        console.log("Empate");
    }
    else if (contador1 > contador2) {
        console.log("Gana 1");
    }
    else {
        console.log("Gana 2");
    }
}
const jugadas = [
    (new Jugada('R', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('R', 'S')),
    (new Jugada('P', 'R')),
    (new Jugada('P', 'P')),
    (new Jugada('P', 'S')),
    (new Jugada('S', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'S')),
];
const jugadas2 = [
    (new Jugada('R', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('P', 'S')),
    (new Jugada('P', 'R')),
    (new Jugada('S', 'S')),
    (new Jugada('P', 'S')),
    (new Jugada('P', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'P')),
];
const jugadas3 = [
    (new Jugada('S', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('R', 'S')),
    (new Jugada('S', 'R')),
    (new Jugada('P', 'P')),
    (new Jugada('P', 'S')),
    (new Jugada('S', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'S')),
];
jugar(jugadas);
jugar(jugadas2);
jugar(jugadas3);
