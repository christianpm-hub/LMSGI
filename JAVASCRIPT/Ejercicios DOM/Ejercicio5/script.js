const lista = document.getElementById('lista');
const button = document.getElementById('agregar');
const input = document.getElementById('input');

button.addEventListener('click', agregarelemento);

function agregarelemento(){
    const li = document.createElement('li');
    li.textContent = input.value;    
    lista.appendChild(li);
    input.value = '';
}


