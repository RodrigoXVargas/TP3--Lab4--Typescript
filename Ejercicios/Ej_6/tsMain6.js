"use strict";
class FiguraGeometrica {
    constructor(base, altura) {
        this.base = base;
        this.altura = altura;
    }
    calcularArea() { }
    ;
}
class Rectangulo extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.calcularArea = () => this.base * this.altura;
    }
}
class Triangulo extends FiguraGeometrica {
    constructor() {
        super(...arguments);
        this.calcularArea = () => (this.base * this.altura) / 2;
    }
}
