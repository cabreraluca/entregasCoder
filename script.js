let tablaDePosiciones = []; // Creo el array
class Jugador{
    constructor(nombre, puntos, diferencia){
        this.nombre = nombre;
        this.puntos = puntos;
        this.diferencia = diferencia;
    }
}

let botonAgregar = document.getElementById("btn");
botonAgregar.addEventListener('click', agregar);

function agregar(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let puntos = document.getElementById("puntos").value;
    let diferencia = document.getElementById("diferencia").value;
    console.log(nombre);

    tablaDePosiciones.push(new Jugador(nombre, puntos, diferencia));
    mostrarTabla(tablaDePosiciones);
}

function mostrarTabla(tablaDePosiciones) {
    let tablaImpresa = document.getElementById("respuestaBotonImprimir");
    tablaImpresa.innerHTML = "";
    for (const jugador of tablaDePosiciones) {
        let div = document.createElement("div");
        div.innerHTML = `
			<div class="jugador">
				<h3>Jugador: ${jugador.nombre}</h3>
				<p>Puntos: ${jugador.puntos}<p>
				<p>Diferencia: ${jugador.diferencia}<p>
			</div>
		`;

        tablaImpresa.appendChild(div);
}
}
