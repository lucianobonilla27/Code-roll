
//inicia sesion el invitado 
const invitado = JSON.parse( sessionStorage.getItem ("invitado"))
console.log (invitado)



if (invitado)  {
    
    alert ("coincide!!");
    
    function agregarAplaylist (){
        
        const cancionAgregada = document.getElementById ("cancionAgregada").value;
        const listaCanciones = JSON.parse (localStorage.getItem ("canciones")) || [];  //Obtengo las canciones que estan en la lista

        console.log (listaCanciones)  //como hago para acceder solo al TITULO de la cancion, para que dps abajo se pueda comparar.
        

        //Busca si la cancion ya existe en la playlist 
        const coincideCancion = listaCanciones.find (function(c){
            return c === cancionAgregada
        });
        console.log (coincideCancion) 

    

             if (!invitado.includes (cancionAgregada)){

                listaCanciones.push (cancionAgregada);
                sessionStorage.setItem (invitado, JSON.stringify (cancionAgregada))  //puedo poner invitado de nuevo, y que me "agregue" datos? o tengo que poner una llave nueva
                console.log ("la cancion se agrego a la playlist")
                mostrarPlaylist ();

            } 

    }
    }
    else {
        alert ("no coincide")
    }

    function mostrarPlaylist (){

        document.getElementById ("detalle-playlist").value;
        for (let i=0; i<  listaCanciones.length; i++){
            const cancion = listaCanciones[i];
            const cancionEnPlaylist = document.createElement ("li");
            cancionEnPlaylist.textContent = cancion;
            listaCanciones.appendChild (cancionEnPlaylist)
        }

    }


        
        

    
    
    







