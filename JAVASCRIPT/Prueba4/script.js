const button = document.getElementById('agregar');
const listatareas = document.getElementById('listatareas');
const entrada = document.getElementById('entrada');
const bcambiarcolor = document.getElementById('cambiarcolor');

button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', colorrojo);

function colorrojo(){
    const listatareasli = document.querySelectorAll('li');
    for (let i = 0; i<listatareasli.length;i++){
        listatareasli[i].style.color = 'red';
    }
}

function agregar(){
    const litarea = document.createElement('li');

    const node = document.createTextNode(entrada.value);
    litarea.appendChild(node);
    
    listatareas.appendChild(litarea);

    /*
    const enlace = document.createElement('a');
    const node2 = document.createTextNode('Enlace a...')
    enlace.appendChild(node2);
    enlace.setAttribute('href', 'https://www.ieszaidinvergeles.org')
    
    ptarea.appendChild(enlace);

    const imagen = document.createElement('img');
    tareas.appendChild(imagen);
    imagen.setAttribute('src', 'https://eldiariony.com/wp-content/uploads/sites/2/2018/06/pedro-sanchez-gettyimages-963995924.jpg?quality=80&strip=all')
    */
}