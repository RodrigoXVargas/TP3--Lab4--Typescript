"use strict";
class Cerveza {
    constructor(id, uid, brand, name, style, hop, yeast, malts, ibu, alcohol, blg) {
        this.id = id;
        this.uid = uid;
        this.brand = brand;
        this.name = name;
        this.style = style;
        this.hop = hop;
        this.yeast = yeast;
        this.malts = malts;
        this.ibu = ibu;
        this.alcohol = alcohol;
        this.blg = blg;
    }
}
const url = "https://random-data-api.com/api/beer/random_beer?size=25";
const cervezas = [];
function obtenerDatos() {
    fetch(url)
        .then(response => response.json())
        .then(data => guardarCervezas(data))
        .catch(error => console.log(error));
}
function guardarCervezas(data) {
    for (let i = 0; i < data.length; i++) {
        cervezas.push(new Cerveza(data[i].id, data[i].uid, data[i].brand, data[i].name, data[i].style, data[i].hop, data[i].yeast, data[i].malts, data[i].ibu, data[i].alcohol, data[i].blg));
    }
    mostrarDatos(cervezas);
}
function mostrarDatos(cervezas) {
    const tbody = document.getElementById("cervezas");
    if (tbody != null) {
        cervezas.forEach((cerveza) => {
            const fila = document.createElement('tr');
            fila.innerHTML = `
                <td>${cerveza.name}</td>
                <td>${cerveza.brand}</td>
                <td>${cerveza.style}</td>
                <td>${cerveza.ibu}</td>
                <td>${cerveza.alcohol}</td>
                `;
            tbody.appendChild(fila);
        });
    }
}
obtenerDatos();
