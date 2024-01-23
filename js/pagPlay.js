
//inicia sesion el invitado 
const invitado = JSON.parse( sessionStorage.getItem ("invitado"))
console.log (invitado)



if (invitado)  {
    
    alert ("coincide!!");
    
    function agregarAplaylist(){
        
        const cancionAgregada = document.getElementById ("cancionAgregada");
        let playlist = JSON.parse(sessionStorage.getItem ("playlist")) || [];
        playlist.push (cancionAgregada) //agregar el id de la cancion a la playlist
        sessionStorage.setItem ("playlist", JSON.stringify (playlist));  // guardo la playlist actualizada en la sesion 
        mostrarPlaylist ();
    }}

    function mostrarPlaylist (){

        const playlist = JSON.parse (sessionStorage.getItem ("playlist")) || [];   //obtengo la playlist desde la sesion
        const playListDiv = document.getElementById ("detalle-playlist");
        playListDiv.innerHTML ="";   // limpio el contenido del div donde estara la playlist

        for (let i=0; i< playlist.length; i++){
        const cancion = playlist[i];
        const cancionEnPlaylist = document.createElement ("li");
        cancionEnPlaylist.textContent = cancion;
        playListDiv.appendChild (cancionEnPlaylist);
        
    }
}




    
    
    







