const formLog = document.querySelector('#formLogin')

formLog.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
        console.log(username, password)

        fetch("../api/fakeApi.json")
        .then((response) => response.json())
        .then((user) => {
            console.log(user)
            const userLogued = user.find(
                (user) => user.username === username && user.password === password
            )
            
            const users = JSON.parse(localStorage.getItem("users")) || []
            const userValid = users.find(users => users.username == username)


            if(userLogued || userValid){
                alert('Bienvenido')
                window.location.href = "../html/principal.html"
            }
            else{
                alert('pass o usu mal ingresado')
            }
            
            
        })
            
})

function cerrarSesion(){
    localStorage.removeItem("username")
    window.location.href = '../index.html'
}





