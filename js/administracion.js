const Cancion = {
    generarCodigo: function () {
        return Math.random().toString(36).substring(7);
    },
};

const Administracion = {
    canciones: [],

    cargarCancionesDesdeLocalStorage: function () {
        const storedCanciones = localStorage.getItem('canciones');
        if (storedCanciones) {
            this.canciones = JSON.parse(storedCanciones);
        }
    },

    guardarCancionesEnLocalStorage: function () {
        localStorage.setItem('canciones', JSON.stringify(this.canciones));
    },


    limpiarFormulario: function () {
        // Limpiar los campos del formulario
        document.getElementById('titulo').value = '';
        document.getElementById('artista').value = '';
        document.getElementById('categoria').value = '';
        document.getElementById('imagenUrl').value = '';
        document.getElementById('duracion').value = '';
        document.getElementById('cancionUrl').value = '';
    },

    agregarCancion: function (cancion) {
        this.canciones.push(cancion);
        this.guardarCancionesEnLocalStorage();
        this.actualizarTabla();
    },

    editarCancion: function (codigo, nuevaCancion) {
        const index = this.canciones.findIndex(cancion => cancion.codigo === codigo);

        if (index !== -1) {
            this.canciones[index] = nuevaCancion;
            this.actualizarTabla();
            this.guardarCancionesEnLocalStorage();
            this.cerrarFormularioCancion(); // Cerrar el formulario después de editar
        }
    },

    eliminarCancion: function (codigo) {
        this.canciones = this.canciones.filter(cancion => cancion.codigo !== codigo);
        this.actualizarTabla();
        this.guardarCancionesEnLocalStorage();
    },

    guardarCancion: function () {
        
        const titulo = document.getElementById('titulo').value;
        const artista = document.getElementById('artista').value;
        const categoria = document.getElementById('categoria').value;
        const imagenUrl = document.getElementById('imagenUrl').value;
        const duracion = document.getElementById('duracion').value;
        const cancionUrl = document.getElementById('cancionUrl').value;
    
        
        if (!titulo || !artista || !categoria || !imagenUrl || !duracion || !cancionUrl) {
            alert('Por favor, complete todos los campos.'); 
            return;
        }
    
       
        const nuevaCancion = {
            codigo: Cancion.generarCodigo(),
            titulo: titulo,
            artista: artista,
            categoria: categoria,
            imagenUrl: imagenUrl,
            duracion: duracion,
            cancionUrl: cancionUrl
        };
    
        
        this.agregarCancion(nuevaCancion);
        this.limpiarFormulario();
    },
    

    actualizarTabla: function () {
        const adminTableBody = document.getElementById('adminTableBody');
        if (adminTableBody) {
            adminTableBody.innerHTML = '';

            this.canciones.forEach(cancion => {
                const row = adminTableBody.insertRow();
                row.insertCell(0).textContent = cancion.codigo;
                row.insertCell(1).textContent = cancion.titulo;
                row.insertCell(2).textContent = cancion.artista;
                row.insertCell(3).textContent = cancion.categoria;

                const imagenCell = row.insertCell(4);
                const imagen = document.createElement('img');
                imagen.src = cancion.imagenUrl;
                imagen.alt = cancion.titulo;
                imagen.classList.add('imagen-cancion');
                imagenCell.appendChild(imagen);

                const accionesCell = row.insertCell(5);
                
                // Botón Editar
                const editarButton = document.createElement('button');
                editarButton.textContent = 'Editar';
                editarButton.classList.add('btn', 'btn-warning', 'btn-sm');
                editarButton.onclick = () => this.abrirFormularioEditar(cancion);
                accionesCell.appendChild(editarButton);

                // Botón Eliminar
                const eliminarButton = document.createElement('button');
                eliminarButton.textContent = 'Eliminar';
                eliminarButton.classList.add('btn', 'btn-danger', 'btn-sm');
                eliminarButton.onclick = () => this.eliminarCancion(cancion.codigo);
                accionesCell.appendChild(eliminarButton);
            });
        }
    },

    abrirFormularioEditar: function (cancion) {
        
        document.getElementById('tituloE').value = cancion.titulo;
        document.getElementById('artistaE').value = cancion.artista;
        document.getElementById('categoriaE').value = cancion.categoria;
        document.getElementById('imagenUrlE').value = cancion.imagenUrl;
        document.getElementById('duracionE').value = cancion.duracion;
        document.getElementById('cancionUrlE').value = cancion.cancionUrl;

        
        const modal = new bootstrap.Modal(document.getElementById('editarModal'));
        modal.show();

        
        document.getElementById('guardarButton').onclick = () => this.guardarEdicionCancion(cancion.codigo);

        
        document.getElementById('cancelarButton').onclick = () => this.cerrarFormularioCancion();
    },

    guardarEdicionCancion: function (codigo) {
        
        const titulo = document.getElementById('tituloE').value.trim();
        const artista = document.getElementById('artistaE').value.trim();
        const categoria = document.getElementById('categoriaE').value.trim();
        const imagenUrl = document.getElementById('imagenUrlE').value.trim();
        const duracion = document.getElementById('duracionE').value.trim();
        const cancionUrl = document.getElementById('cancionUrlE').value.trim();
    
        // Realizar validaciones
        if (!titulo || !artista || !categoria || !imagenUrl || !duracion || !cancionUrl) {
            alert('Por favor, complete todos los campos.'); 
            return;
        }
    
        
    
        
        const nuevaCancion = {
            codigo,
            titulo,
            artista,
            categoria,
            imagenUrl,
            duracion,
            cancionUrl,
        };
    
        
        this.editarCancion(codigo, nuevaCancion);
    
      
        this.cerrarFormularioCancion();
    },
    
};

// Cargar canciones almacenadas en localStorage al cargar la página
Administracion.cargarCancionesDesdeLocalStorage();

// Agregar tres canciones de ejemplo si no hay canciones en localStorage
if (Administracion.canciones.length === 0) {
    const cancionesEjemplo = [
        {
            codigo: Cancion.generarCodigo(),
            titulo: "Bohemian Rhapsody",
            artista: "Queen",
            categoria: "Rock",
            imagenUrl: "https://imageio.forbes.com/blogs-images/simonthompson/files/2018/12/queen_large_2500-1200x1203.jpg?height=712&width=711&fit=bounds",
            duracion: "5:55",
            cancionUrl: "https://ejemplo.com/bohemian-rhapsody.mp3",
        },
        {
            codigo: Cancion.generarCodigo(),
            titulo: "Shape of You",
            artista: "Ed Sheeran",
            categoria: "Pop",
            imagenUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/b/b4/Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png/220px-Shape_Of_You_%28Official_Single_Cover%29_by_Ed_Sheeran.png",
            duracion: "3:54",
            cancionUrl: "https://ejemplo.com/shape-of-you.mp3",
        },
        {
            codigo: Cancion.generarCodigo(),
            titulo: "Billie Jean",
            artista: "Michael Jackson",
            categoria: "Pop",
            imagenUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQodev9KYKKJg_pXgiAVs5pT00VbTtqGGn01lsDuhjosw&s",
            duracion: "4:54",
            cancionUrl: "https://ejemplo.com/billie-jean.mp3",
        },
    ];

    cancionesEjemplo.forEach(nuevaCancion => {
        Administracion.agregarCancion(nuevaCancion);
    });
}

// Actualizar la tabla al cargar la página
Administracion.actualizarTabla();
