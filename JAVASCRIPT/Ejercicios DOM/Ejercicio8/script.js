const input = document.getElementById('tarea');
const agregar = document.getElementById('agregar');
const lista = document.getElementById('lista');

agregar.addEventListener('click', agregartarea);

function agregartarea(){
    const li = document.createElement('li');
    const eliminar = document.createElement('button');
    const completada = document.createElement('button');
    completada.textContent = '👍';
    eliminar.textContent = 'X';

    li.textContent = input.value;
    lista.appendChild(li);
    li.appendChild(eliminar);
    li.appendChild(completada);

    eliminar.addEventListener('click', function eliminarelemento(){
        li.remove();
    })

    completada.addEventListener('click', function tareacompletada(){
        const p = document.createElement('p');
        p.textContent = '✅';
        li.appendChild(p);
        completada.remove();
    })

    input.value = '';
}