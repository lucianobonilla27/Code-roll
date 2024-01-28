//inicia sesion el invitado 
const invitado = JSON.parse( sessionStorage.getItem ("invitado"))
//console.log (invitado)



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
        enlace.href = `detalle.html?codigo=${cancion.codigo}`;
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
            li.innerHTML = `<strong>${cancion.titulo}</strong> - ${cancion.artista}`;

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
function reproducirCancion(urlCancion) {
    // Elimina cualquier iframe existente
    var existingIframe = document.getElementById('soundcloudIframe');
    if (existingIframe) {
        existingIframe.parentNode.removeChild(existingIframe);
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
}


// Llama a cargarCatalogo para inicializar la página
cargarCatalogo();

// Agrega un event listener para la búsqueda
document.getElementById("busquedaInput").addEventListener("input", buscar);


//******************************************************************************************* */

//Agregar Boton Playlist

// Obtener el elemento ul y los elementos li dentro de él
const ulElement = document.getElementById("catalogoCanciones");
const listItems = ulElement.getElementsByTagName("li");

// Recorrer cada elemento li
for (let i = 0; i < listItems.length; i++) {
  let li = listItems[i];

  // Crear el botón "Agregar a mi playlist"
  const btnAgregar = document.createElement("button");
  btnAgregar.innerHTML = "Agregar a mi playlist";

  btnAgregar.addEventListener('click', (e)=>{
    agregarAplaylist(e);
  })
  
  // Agregar el botón como hijo del elemento li
  li.appendChild(btnAgregar);
}





//******FUNCIONES */




function agregarAplaylist(e) {
    const boton = e.target;
    const cancion = boton.parentElement;
    const nombreCancion = cancion.querySelector("li").textContent;
    
    // Aquí puedes agregar el código necesario para agregar la canción a tu playlist
    // Por ejemplo, puedes utilizar localStorage para guardar la canción en una lista persistente
  
    console.log("Canción agregada a la playlist:", nombreCancion);}

    
    
    // function agregarAplaylist(e){
    //     console.log("esta ok ")
    //      if (e.target.li === "agregaCancion") {
    //         console.log("si funciona")
    //         const cancion = e.target.textContent;
    //         // Aquí guardamos la canción en el Session Storage
    //         let playlist = JSON.parse(sessionStorage.getItem("playlist")) || [];
    //         playlist.push(cancion);
    //         sessionStorage.setItem("playlist", JSON.stringify(playlist));
    //     }
    //     else{
    //         console.log("esta mal")
    //     }
    
       
    // }