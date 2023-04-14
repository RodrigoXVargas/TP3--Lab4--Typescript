class FiguraGeometrica {
    base: number;
    altura: number;

    constructor(base:number, altura: number){
        this.base = base;
        this.altura = altura;
    }

    calcularArea(){};
}

class Rectangulo extends FiguraGeometrica {
    calcularArea = (): number => this.base * this.altura;
}

class Triangulo extends FiguraGeometrica {
    calcularArea = (): number => (this.base * this.altura)/2;
}

