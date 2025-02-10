// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// app.js
let amigos = [];

function agregarAmigo() {
    const nombreAmigoInput = document.getElementById("amigo");
    const nombreAmigo = nombreAmigoInput.value.trim();

    if (nombreAmigo !== "") {
        amigos.push(nombreAmigo);
        actualizarListaAmigos();
        nombreAmigoInput.value = ""; // Limpiar el input
    }
}

function actualizarListaAmigos() {
    const listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpiar la lista

    for (let i = 0; i < amigos.length; i++) {
        const amigo = amigos[i];
        const nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = amigo;
        listaAmigos.appendChild(nuevoAmigo);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos amigos para el sorteo.");
        return;
    }

    // para barajar el array
    for (let i = amigos.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [amigos[i], amigos[j]] = [amigos[j], amigos[i]]; // Intercambio
    }

    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";  // Limpia resultados anteriores

    for (let i = 0; i < amigos.length; i++) {
        const amigoActual = amigos[i];
        const amigoAsignado = amigos[(i + 1) % amigos.length];

        const resultadoItem = document.createElement("li");
        resultadoItem.textContent = `${amigoActual} le regala a ${amigoAsignado}`;
        resultado.appendChild(resultadoItem);
    }
}