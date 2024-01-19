const formLog = document.querySelector('#formLogin')

formLog.addEventListener('submit', (e) => {
    e.preventDefault()

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const existe = pattern.test(email)

        console.log(email, password)

        if(existe){
            fetch("../api/fakeApi.json")
        .then((response) => response.json())
        .then((user) => {
            const userLogued = user.find(
                (user) => user.password === password && user.email === email
            )

            if(email=== "admin@gmail.com" && password === "admin"){
                window.location.href = "../html/administracion.html"
            }

            const users = JSON.parse(localStorage.getItem("users")) || []
            const userValid = users.find(users => users.email == email)


            if(userLogued || userValid){
                alert('Bienvenido')
                sessionStorage.setItem ('invitado', JSON.stringify (users))     //agregado para playlist
                window.location.href = "../html/pagPlay.html"
                
                
            }
            else{
                alert('pass o usu mal ingresado')
            }
            
            
        })
        }
        else{
            alert("Correo electronico no valido")
        }
            
})

function cerrarSesion(){
    localStorage.removeItem("username")
    window.location.href = '../index.html'
}





