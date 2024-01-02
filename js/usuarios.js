document.addEventListener("DOMContentLoaded", function() {
    const adminUser = { name: "Admin", email: "admin@example.com", password: "admin123", role: "admin" };
    const guestUser = { name: "Invitado", email: "guest@example.com", password: "guest123", role: "guest" };

    // Verificar si los usuarios ya existen antes de agregarlos
    if (!getUserByEmail(adminUser.email)) {
        saveUser(adminUser);
    }

    if (!getUserByEmail(guestUser.email)) {
        saveUser(guestUser);
    }

    updateAdminPanel();
});

const Registro = {
    openModal: function() {
        $('#registerModal').modal('show');
    },

    closeModal: function() {
        $('#registerModal').modal('hide');
    },

   
};

const InicioSesion = {
    openModal: function() {
        $('#loginModal').modal('show');
    },

    closeModal: function() {
        $('#loginModal').modal('hide');
    },

   
};




function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (name.trim() === '' || email.trim() === '' || password.trim() === '') {
        alert('Todos los campos son obligatorios');
        return false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('El correo electrónico no es válido');
        return false;
    }

    return true;
}

function validateAndRegister() {
    if (validateForm()) {
        registerUser();
    }
}

function registerUser() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const newUser = { name, email, password };
    saveUser(newUser);

    document.getElementById('registrationForm').reset();


    updateAdminPanel();
    Registro.closeModal();
}


function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function getUserByEmail(email) {
    const users = getUsers();
    return users.find(user => user.email === email);
}

function updateAdminPanel() {
    const userTableBody = document.getElementById('userTableBody');
    if (userTableBody) {
        userTableBody.innerHTML = '';

        const users = getUsers();

        users.forEach(user => {
            const row = userTableBody.insertRow();
            row.insertCell(0).textContent = user.name;
            row.insertCell(1).textContent = user.email;

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.classList.add('btn', 'btn-danger', 'btn-sm');
            deleteButton.onclick = () => deleteUser(user.email);

            const cell = row.insertCell(2);
            cell.appendChild(deleteButton);
        });
    }
}

function deleteUser(email) {
    let users = getUsers();
    users = users.filter(user => user.email !== email);
    localStorage.setItem('users', JSON.stringify(users));
    updateAdminPanel();
}

function loginUser() {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;

    const user = getUserByEmail(email);

    if (user && user.password === password) {
        alert('Inicio de sesión exitoso');
        InicioSesion.closeModal();
        // Redirigir a una página cuando esté listo
    } else {
        alert('Credenciales incorrectas. Inténtalo de nuevo.');
    }
}
