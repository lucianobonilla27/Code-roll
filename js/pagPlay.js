
//recuperar las canciones que guarde en local storage

const codigo = localStorage.getItem ("codigo")
const cancion = localStorage.getItem ("nombre")
const artista = local.localStorage.getItem ("artista")
const duracion = localStorage.getItem ("duracion")

//mostrar las canciones en la pagina

const detallePlaylist = document.getElementById ("detallePlaylist");

function mostarCanciones (){

    mostarCanciones.array.forEach(element => {

        const cancionElegida = document.createElement =("li");
        cancionElegida.textcontent = cancion; 
        detallePlaylist.appendChild (cancionElegida);
        
    });

}