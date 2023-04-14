class Vehiculo {
    marca: string;
    modelo: string;
    patente: string;

    constructor(marca: string, modelo: string, patente: string){
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
}

const vehiculos: Vehiculo[] = [];

function guardarVehiculo(){
    let marcaInput = document.getElementById("marca") as HTMLInputElement;
    let modeloInput = document.getElementById("modelo") as HTMLInputElement;
    let patenteInput = document.getElementById("patente") as HTMLInputElement;

    let vehiculo = new Vehiculo(marcaInput.value, modeloInput.value, patenteInput.value);

    vehiculos.push(vehiculo);

    marcaInput.value = "";
    modeloInput.value = "";
    patenteInput.value = "";
    marcaInput.focus();

    let divListado = document.getElementById("listadoVehiculos") as HTMLDivElement;
    divListado.innerHTML ="";
    let listaVehiculos = document.createElement("ul");

    for (let vehiculo of vehiculos) {
        const itemVehiculo = document.createElement("li");
        itemVehiculo.textContent = `Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Patente: ${vehiculo.patente}`;
        listaVehiculos.appendChild(itemVehiculo);
    }
    divListado.appendChild(listaVehiculos);
}