function comentar() {
    const comentarioTexto = document.getElementById('comentarios').value.trim(); /*declaramos 2 variables en las que almacenamos el id
    y en el caso de comentarios obtenemos lo que el usuario escribio y el .trim es para quitarle los espacios en blanco al incio y al final*/
    const lista = document.getElementById('lista');

    if (comentarioTexto !== "") { /*si el usario escribio algo en el texto*/
        // Contenedor principal (agrupa todo)
        const contenedorPrincipal = document.createElement('div');
        contenedorPrincipal.style.marginBottom = '15px';

        // Contenedor para el texto
        const contenedorTexto = document.createElement('div');
        contenedorTexto.style.background = 'white';
        contenedorTexto.style.padding = '10px';
        contenedorTexto.style.border = '1px solid #ccc';
        contenedorTexto.style.borderRadius = '5px';
        contenedorTexto.style.marginBottom = '5px';

        const texto = document.createElement('span');
        texto.textContent = comentarioTexto; /*el text content, le asigna el texto de comentarioTexto a al contenedor de texto*/
        contenedorTexto.appendChild(texto);

        // Contenedor para el botón
        const contenedorBoton = document.createElement('div');
        const botonEliminar = document.createElement('button');
        botonEliminar.textContent = 'Eliminar';
        botonEliminar.style.backgroundColor = 'red';
        botonEliminar.style.color = 'white';
        botonEliminar.style.border = 'none';
        botonEliminar.style.padding = '5px 10px';
        botonEliminar.style.borderRadius = '4px';
        botonEliminar.style.cursor = 'pointer';

        botonEliminar.onclick = function () {
            lista.removeChild(contenedorPrincipal);
        };

        contenedorBoton.appendChild(botonEliminar);

        // Agregar ambos contenedores al contenedor principal
        contenedorPrincipal.appendChild(contenedorTexto);
        contenedorPrincipal.appendChild(contenedorBoton);

        // Agregar a la lista en el HTML
        lista.appendChild(contenedorPrincipal);

        // Limpiar textarea
        document.getElementById('comentarios').value = "";
    } else {
        alert("Por favor, escribe una tarea");
    }
}
