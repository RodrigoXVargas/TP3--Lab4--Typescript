interface Reptil {
    nombre: string;
    tipo: string;
    paisOrigen: string;
    pesoPromedio: number;
    esVenenosa: boolean;
}
  
const reptil: Reptil = {
    nombre: "cobra",
    tipo: "serpiente",
    paisOrigen: "India",
    pesoPromedio: 2.5,
    esVenenosa: true
};
 
const reptilValidado: Reptil = Object.assign({}, reptil);

console.log(reptilValidado);  
  