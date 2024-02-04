const formRegis = document.querySelector('#formRegis')
let bandera = 0
formRegis.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const email = document.getElementById("email").value
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const existe = pattern.test(email)

        console.log(username, password, email)

        if(existe){
            fetch("../api/fakeApi.json")
        .then((response) => response.json())
        .then((user) => {
            console.log(user)
            const userRegis = user.find(
                (user) => user.username === username
            )
        
            const users = JSON.parse(localStorage.getItem("users")) || []
            const userRegistrado = users.find(users => users.username == username)

            if(userRegis || userRegistrado){
                alert('El usuario ya está registrado')
                users.localStorage.removeItem("users")
                bandera = 1
            }

            users.push({username: username, email: email.toLowerCase(), password: password})
            localStorage.setItem("users", JSON.stringify(users))

            if(bandera !== 1){
                alert('registro god')
            }
            
        })
        }
        else{
            alert("Correo electronico no valido")
        }


})