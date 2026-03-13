const button = document.getElementById('btn');
const p = document.getElementById('texto');

button.addEventListener('click', cambiarcontenido);

function cambiarcontenido(){
    p.textContent = 'Texto cambiado con JavaScript';
}


