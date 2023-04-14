"use strict";
class Vehiculo {
    constructor(marca, modelo, patente) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }
}
const vehiculos = [];
function guardarVehiculo() {
    let marcaInput = document.getElementById("marca");
    let modeloInput = document.getElementById("modelo");
    let patenteInput = document.getElementById("patente");
    let vehiculo = new Vehiculo(marcaInput.value, modeloInput.value, patenteInput.value);
    vehiculos.push(vehiculo);
    marcaInput.value = "";
    modeloInput.value = "";
    patenteInput.value = "";
    marcaInput.focus();
    let divListado = document.getElementById("listadoVehiculos");
    divListado.innerHTML = "";
    let listaVehiculos = document.createElement("ul");
    for (let vehiculo of vehiculos) {
        const itemVehiculo = document.createElement("li");
        itemVehiculo.textContent = `Marca: ${vehiculo.marca}, Modelo: ${vehiculo.modelo}, Patente: ${vehiculo.patente}`;
        listaVehiculos.appendChild(itemVehiculo);
    }
    divListado.appendChild(listaVehiculos);
}
