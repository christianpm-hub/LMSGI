const contador = document.getElementById('contador');
const sumar = document.getElementById('sumar');
const restar = document.getElementById('restar');
let numero = 0;

sumar.addEventListener('click', sumarcontador);
restar.addEventListener('click', restarcontador);

function sumarcontador(){
    numero++;
    contador.textContent = numero;
}

function restarcontador(){
    numero--;
    contador.textContent = numero;
}

