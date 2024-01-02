const formRegis = document.querySelector('#formRegis')
let bandera = 0
formRegis.addEventListener('submit', (e) => {
    e.preventDefault()

    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
        console.log(username, password)

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

            users.push({username: username, password: password})
            localStorage.setItem("users", JSON.stringify(users))

            if(bandera !== 1){
                alert('registro god')
            }
            
        })


})