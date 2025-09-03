// variable tipo Array para guardar los nombres de los amigos
let amigos = [];
let sorteado = false;

// Función para agregar un amigo
function agregarAmigo() {
    const input = document.getElementById("amigo");
    const nombre = input.value.trim(); // elimina espacios extra

    if (nombre === "") {
        alert("Por favor, escribe un nombre válido.");
        return;
    }

    if (sorteado) {
        amigos = [];
        document.getElementById("listaAmigos").innerHTML = "";
        document.getElementById("resultado").innerHTML = "";
        sorteado = false; // volvemos al estado inicial
    }

    // Agrega el nombre al array
    amigos.push(nombre);

    // Muestra lista de nombres en pantalla
    mostrarLista();

    // Limpia el input
    input.value = "";
}

//mostrar la lista en el <ul>
function mostrarLista() {
    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // limpia antes de volver a mostrar

    amigos.forEach((amigo) => {
        const li = document.createElement("li");
        li.textContent = amigo;
        lista.appendChild(li);
    });
}

//sortear un amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Primero agrega al menos un amigo.");
        return;
    }

    const indice = Math.floor(Math.random() * amigos.length);
    const resultado = amigos[indice];

    const resultadoLista = document.getElementById("resultado");
    resultadoLista.innerHTML = `<li>🎉 Tu amigo secreto es: <strong>${resultado}</strong></li>`;

    //limpia la lista que muestra en pantalla
    document.getElementById("listaAmigos").innerHTML = "";

    // Marca que ya se sorteó
    sorteado = true;
}

