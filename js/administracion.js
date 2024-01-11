//esto es en la pagina ADMINISTRACION

//agregar en cada cancion el boton para agregar a playlist

function agregarAplaylist (){  
      
      window.location.href = "../html/pagPlay.html";
}

//guardar en local storage las canciones seleccionadas

function guardarCancion (){

      localStorage.setItem = ("codigo",codigo ),
      localStorage.setItem = ("nombre" , cancion),
      localStorage.setItem = ("artista" , artista ),
      localStorage.setItem = ("duracion" , duracion)


}

