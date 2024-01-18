
function verificarUsuarioInvitado () {
    
    const usuariosInvitados = ["usuario1","usuario2", "usuario3"]
    
    if (usuariosInvitados.includes (usuario)){
    
        return true;
    }else{
        return false
    }
}   

const usuarioInvitado = sessionStorage.getItem ("invitado")

if (verificarUsuarioInvitado (usuarioInvitado)){
    console.log ( "Bienvenido,  " + usuarioInvitado)
}else{

    alert ("incorrecto")
}











 
//     const usuarioInvitado = obtenerUsuario ();
//     if (usuarioInvitado){
//         sessionStorage.setItem ('username', usuarioInvitado.username);
//         sessionStorage.setItem ( 'playlist', JSON.stringify(usuarioInvitado.playlist));

    
//     }
   
// function obtenerUsuario (){
//     const usuariosGuardados = JSON.parse (sessionStorage.getItem ("invitado"));
//     usuarioInvitado = usuariosGuardados.find ( function (invitado){
//         return invitado.username === username && invitado.password === password
//     })

//     //return usuarioInvitado

//     console.log (usuariosGuardados)
// }

// if (sessionStorage.getItem){

//     //mostrar la playlist
// }










// const usuarioInvitado = sessionStorage.getItem ("invitado")
//     console.log (usuarioInvitado)

//     if (usuarioInvitado){
//         document.getElementById ("nombreUsuario").innerHTML = invitado;
//     }










//recuperar las canciones que guarde en local storage

// const codigo = localStorage.getItem ("codigo")
// const cancion = localStorage.getItem ("nombre")
// const artista = local.localStorage.getItem ("artista")
// const duracion = localStorage.getItem ("duracion")

//mostrar las canciones en la pagina

// const detallePlaylist = document.getElementById ("detallePlaylist");

// function mostarCanciones (){

//     mostarCanciones.array.forEach(element => {

//         const cancionElegida = document.createElement =("li");
//         cancionElegida.textcontent = cancion; 
//         detallePlaylist.appendChild (cancionElegida);
        
//     });

// }