

   

    const invitado = JSON.parse( sessionStorage.getItem ('invitado'))
    
    
    
    console.log (invitado)
    
    
    fetch ("../api/fakeApi.json")
    .then ((response) => response.json())
    .then (invitado => {
        
        if (invitado)  {
            
                alert ("coincide!!")
           }
            
       })
        
        const usuarioGuardado = document.getElementById ("nombre-usuario");
        usuarioGuardado.innerHTML = "hola" + invitado
        
        console.log (usuarioGuardado)
       
       
       








