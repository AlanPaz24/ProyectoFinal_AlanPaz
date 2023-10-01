// script.js

// Función para cargar datos desde un archivo JSON local
function cargarDatos() {
    return fetch('datos.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo cargar el archivo JSON');
            }
            return response.json();
        });
}

// Función para mostrar los usuarios en el DOM
function mostrarUsuarios(usuarios) {
    const userList = document.getElementById('user-list');
    userList.innerHTML = ''; // Limpiar la lista antes de agregar nuevos usuarios

    usuarios.forEach(usuario => {
        const listItem = document.createElement('li');
        listItem.textContent = `Nombre: ${usuario.nombre}, Edad: ${usuario.edad}`;
        userList.appendChild(listItem);
    });
}

// Manejar errores de carga de datos
function handleError(error) {
    console.error('Error:', error);
}

// Cargar datos y mostrar en la página
cargarDatos()
    .then(mostrarUsuarios)
    .catch(handleError);
