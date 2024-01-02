document.addEventListener("DOMContentLoaded", function() {
    updateAdminPanel(); // Actualizar la tabla al cargar la página
});

function openModal() {
    $('#registerModal').modal('show');
}

function closeModal() {
    $('#registerModal').modal('hide');
}

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
    closeModal();
    updateAdminPanel();
}

function saveUser(user) {
    let users = JSON.parse(localStorage.getItem('users')) || [];
    users.push(user);
    localStorage.setItem('users', JSON.stringify(users));
}

function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function updateAdminPanel() {
    const userTableBody = document.getElementById('userTableBody');
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

function deleteUser(email) {
    let users = getUsers();
    users = users.filter(user => user.email !== email);
    localStorage.setItem('users', JSON.stringify(users));
    updateAdminPanel();
}
