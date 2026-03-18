const lista = document.getElementById('lista');
const button = document.getElementById('agregar');
const input = document.getElementById('input');
const eliminar = document.createElement('button');

button.addEventListener('click', agregarelemento);

function agregarelemento() {
    const li = document.createElement('li');
    const eliminar = document.createElement('button');
    eliminar.textContent = 'X';
    li.textContent = input.value;
    lista.appendChild(li);
    li.appendChild(eliminar);
    input.value = '';
    eliminar.addEventListener('click', function eliminarelemento() {
        li.remove();
    })
}








