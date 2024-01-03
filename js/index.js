const canciones = [
    { id: 1, nombre: "MONACO", cantante: "Bad Bunny", url: "https://open.spotify.com/intl-es/track/4MjDJD8cW7iVeWInc2Bdyj?si=a600975158b743c0"},
    { id: 2, nombre: "VOU 787", cantante: "Bad Bunny", url: "https://open.spotify.com/intl-es/track/0rDQZJtSGgsB2rdkObpdFa?si=b4270e65aec0493b"},
    { id: 3, nombre: "Fruto", cantante: "Milo J", url: "https://open.spotify.com/intl-es/track/4SW9gHnW8NfKOdqmh0ij45?si=bcb689b973d04161"},
    { id: 4, nombre: "hArAkIrI", cantante: "Duki", url: "https://open.spotify.com/intl-es/track/4m0ypZ1c1l0WulMk3fkVA0?si=4f87473b98c4458f" },
    { id: 5, nombre: "GIVENCHY", cantante: "Duki", url: "https://open.spotify.com/intl-es/track/6bTVP50bbtMtD6RGe2cUoQ?si=d3937a46d4c2419e" },
    { id: 6, nombre: "Life is Good", cantante: "Drake", url: "https://open.spotify.com/intl-es/track/1K5KBOgreBi5fkEHvg5ap3?si=54a3ce4477944155" },
    { id: 7, nombre: "Bad and Boujee", cantante: "Migos", url: "https://open.spotify.com/intl-es/track/0M9ydKzuF3oZTfYYPfaGX1?si=f00b2d7b9d404b74" },
    { id: 8, nombre: "a lot", cantante: "21 savage", url: "https://open.spotify.com/intl-es/track/2t8yVaLvJ0RenpXUIAC52d?si=ab3d3a2d4a404636" },
];

function cargarCatalogo() {
    const catalogoCanciones = document.getElementById("catalogoCanciones");
    catalogoCanciones.innerHTML = "";

    canciones.forEach((cancion) => {
        const li = document.createElement("li");
        li.className = "cancionItem";
        li.innerHTML = `<strong>${cancion.nombre}</strong> - ${cancion.cantante}`;

        const boton = document.createElement("button");
        boton.textContent = 'Reproducir';
        boton.className = 'btn btn-play';

        boton.addEventListener('click', () => {
            window.open(cancion.url, '_blank');
        });

        li.appendChild(boton);
        catalogoCanciones.appendChild(li);
    });
}

function buscar() {
    const busquedaInput = document.getElementById("busquedaInput").value.toLowerCase();
    const catalogoCanciones = document.getElementById("catalogoCanciones");
    catalogoCanciones.innerHTML = "";

    for (let i = 0; i < canciones.length; i++) {
        const cancion = canciones[i];
        if (cancion.nombre.toLowerCase().includes(busquedaInput) || cancion.cantante.toLowerCase().includes(busquedaInput)) {
            const li = document.createElement("li");
            li.className = "cancionItem";
            li.innerHTML = `<strong>${cancion.nombre}</strong> - ${cancion.cantante}`;

            const boton = document.createElement("button");
            boton.textContent = 'Reproducir';
            boton.className = 'btn btn-play';

            boton.addEventListener('click', () => {
                window.open(cancion.url, '_blank');
            });

            li.appendChild(boton);
            catalogoCanciones.appendChild(li);
        }
    }
}


cargarCatalogo();

document.getElementById("busquedaInput").addEventListener("input", buscar);