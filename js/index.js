function cargarCatalogo() {
    const canciones = [
        { id: 1, nombre: "LOS PITS", cantante: "Bad Bunny" },
        { id: 2, nombre: "VOGUE 787", cantante: "Bad Bunny" },
        { id: 3, nombre: "Fruto", cantante: "Milo J" },
        { id: 4, nombre: "hArAkIrI", cantante: "Duki" },
        { id: 5, nombre: "GIVENCHY", cantante: "Duki" },
        { id: 6, nombre: "Tus Ojos son de Colores", cantante: "J Balvin" },
        { id: 7, nombre: "Voy a Decir", cantante: "Maluma" },
    ];

    canciones.forEach((cancion) => {
        const li = document.createElement("li");
        li.className = "cancionItem";
        li.innerHTML = `<strong>${cancion.nombre}</strong> - ${cancion.cantante}`;
        catalogoCanciones.appendChild(li);
    });
}

function buscar() {
    const busquedaInput = document.getElementById("busquedaInput").value.toLowerCase();
    const catalogoCanciones = document.getElementById("catalogoCanciones");
    catalogoCanciones.innerHTML = "";

    const canciones = [
        { id: 1, nombre: "LOS PITS", cantante: "Bad Bunny" },
        { id: 2, nombre: "VOGUE 787", cantante: "Bad Bunny" },
        { id: 3, nombre: "Fruto", cantante: "Milo J" },
        { id: 4, nombre: "hArAkIrI", cantante: "Duki" },
        { id: 5, nombre: "GIVENCHY", cantante: "Duki" },
        { id: 6, nombre: "Tus Ojos son de Colores", cantante: "J Balvin" },
        { id: 7, nombre: "Voy a Decir", cantante: "Maluma" },
    ];

    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];
        if (cancion.nombre.toLowerCase().includes(busquedaInput) || cancion.cantante.toLowerCase().includes(busquedaInput)) {
            const li = document.createElement("li");
            li.className = "cancionItem";
            li.innerHTML = `<strong>${cancion.nombre}</strong> - ${cancion.cantante}`;
            catalogoCanciones.appendChild(li);
        }
    }
}
cargarCatalogo();
