const lista = document.getElementById('lista');
const button = document.getElementById('agregar');

button.addEventListener('click', agregarelemento);

function agregarelemento(){
    const li = document.createElement('li');
    li.textContent = 'Nuevo elemento';
    lista.appendChild(li);
}