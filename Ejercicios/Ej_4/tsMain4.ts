enum Movimiento {PIEDRA, PAPEL, TIJERAS, NoVALIDO}

function parceoEnums(valor: string){
    switch(valor.toUpperCase()){
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
    jugador1: Movimiento;
    jugador2: Movimiento;

    constructor (movimiento1: string, movimiento2: string){
        this.jugador1 = parceoEnums(movimiento1);
        this.jugador2 = parceoEnums(movimiento2);
    }
}

function jugar(jugadas: Jugada[]){
    let contador1: number = 0;
    let contador2: number = 0;
    jugadas.forEach(jugada =>{
        if (jugada.jugador1 == 2 &&  jugada.jugador2 == 0){
            contador2++;
        } else if (jugada.jugador1 == 0 &&  jugada.jugador2 == 2){
            contador1++;
        } else if (jugada.jugador1 < jugada.jugador2){
            contador2++;
        } else if (jugada.jugador1 > jugada.jugador2){
            contador1++;
        }
    })

    if(contador1==contador2){
        console.log("Empate");
    }else if(contador1 > contador2){
        console.log("Gana 1");
    } else {
        console.log("Gana 2");
    }
}

const jugadas: Jugada[] = [
    (new Jugada('R', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('R', 'S')),
    
    (new Jugada('P', 'R')),
    (new Jugada('P', 'P')),
    (new Jugada('P', 'S')),

    (new Jugada('S', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'S')),
]

const jugadas2: Jugada[] = [
    (new Jugada('R', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('P', 'S')),
    
    (new Jugada('P', 'R')),
    (new Jugada('S', 'S')),
    (new Jugada('P', 'S')),

    (new Jugada('P', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'P')),
]

const jugadas3: Jugada[] = [
    (new Jugada('S', 'R')),
    (new Jugada('R', 'P')),
    (new Jugada('R', 'S')),
    
    (new Jugada('S', 'R')),
    (new Jugada('P', 'P')),
    (new Jugada('P', 'S')),

    (new Jugada('S', 'R')),
    (new Jugada('S', 'P')),
    (new Jugada('S', 'S')),
]

jugar(jugadas);
jugar(jugadas2);
jugar(jugadas3);
