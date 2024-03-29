// Obtener canciones desde localStorage
const canciones = JSON.parse(localStorage.getItem('canciones')) || [];

function cargarCatalogo() {
    const catalogoCanciones = document.getElementById("catalogoCanciones");
    catalogoCanciones.innerHTML = "";

    canciones.forEach((cancion) => {
        const li = document.createElement("li");
        li.className = "cancionItem";

        // Crea un enlace al detalle de la canción con el código de la canción como parámetro
        const enlace = document.createElement("a");
        enlace.href = `../html/detalle.html?codigo=${cancion.codigo}`;
        enlace.innerHTML = `<strong>${cancion.titulo}</strong>`;

        // Agrega el guión como texto después del enlace
        const textoGuion = document.createTextNode(" - ");
        li.appendChild(enlace);
        li.appendChild(textoGuion);

        // Agrega el texto del artista después del guión
        const textoArtista = document.createTextNode(cancion.artista);
        li.appendChild(textoArtista);

        const boton = document.createElement("button");
        boton.textContent = 'Reproducir';
        boton.className = 'btn btn-play';

        boton.addEventListener('click', () => {
            reproducirCancion(cancion.cancionUrl);
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
        if (cancion.titulo.toLowerCase().includes(busquedaInput) || cancion.artista.toLowerCase().includes(busquedaInput)) {
            const li = document.createElement("li");
            li.className = "cancionItem";

            // Crea un enlace solo para el título de la canción
            const enlace = document.createElement("a");
            enlace.href = `../html/detalle.html?codigo=${cancion.codigo}`;
            enlace.innerHTML = `<strong>${cancion.titulo}</strong>`; // Contenido del enlace es solo el título

            // Agrega el enlace al li
            li.appendChild(enlace);

            // Agrega el nombre del artista al li
            const artistaSpan = document.createElement("span");
            artistaSpan.innerHTML = ` - ${cancion.artista}`;
            li.appendChild(artistaSpan);

            const boton = document.createElement("button");
            boton.textContent = 'Reproducir';
            boton.className = 'btn btn-play';

            boton.addEventListener('click', () => {
                reproducirCancion(cancion.cancionUrl);
            });

            li.appendChild(boton);
            catalogoCanciones.appendChild(li);
        }
    }
}




// Reproduce la canción utilizando un widget de SoundCloud
// Declarar una variable global para almacenar la referencia al botón
var closeButton;

function reproducirCancion(urlCancion) {
    // Elimina cualquier iframe existente
    var existingIframe = document.getElementById('soundcloudIframe');
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
        ocultarBotonCerrar();
    }

    // Reemplaza el enlace de SoundCloud con el enlace de tu canción
    var soundcloudEmbedUrl = "https://w.soundcloud.com/player/?url=" + encodeURIComponent(urlCancion) + "&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true";

    // Crea un nuevo iframe para el widget de SoundCloud
    var iframe = document.createElement('iframe');
    iframe.id = 'soundcloudIframe';
    iframe.width = "100%";
    iframe.height = "100";
    iframe.allow = "autoplay";
    iframe.src = soundcloudEmbedUrl;

    // Establece la posición fija y la alineación en la parte inferior
    iframe.style.position = "fixed";
    iframe.style.bottom = "0";
    iframe.style.left = "0";

    // Agrega el nuevo iframe al cuerpo del documento
    document.body.appendChild(iframe);

    // Agrega un botón de cerrar en la parte inferior derecha del iframe
    closeButton = document.createElement('button');
    closeButton.textContent = 'Cerrar Reproductor';
    closeButton.classList.add('btn', 'btn-danger');
    closeButton.style.position = 'fixed';
    closeButton.style.bottom = '10px';
    closeButton.style.right = '10px';
    closeButton.onclick = function () {
        cerrarIframe();
    };
    document.body.appendChild(closeButton);
}

function cerrarIframe() {
    var existingIframe = document.getElementById('soundcloudIframe');
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
        ocultarBotonCerrar();
    }
}

function ocultarBotonCerrar() {
    if (closeButton) {
        closeButton.style.display = 'none';
    }
}




// Llama a cargarCatalogo para inicializar la página
cargarCatalogo();

// Agrega un event listener para la búsqueda
document.getElementById("busquedaInput").addEventListener("input", buscar);
