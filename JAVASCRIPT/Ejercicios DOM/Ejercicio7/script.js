const input = document.getElementById('nombre');
const button = document.getElementById('enviar');

button.addEventListener('click', validar);

function validar(){
    if (input.value === '') {
        alert('El campo no puede estar vacío');
    }
}

