const p = document.getElementById('mensaje');
const button = document.getElementById('toggle');

button.addEventListener('click', alternar);

function alternar(){
    if(p.style.display == 'none'){
        p.style.display = 'block';
    } else{
        p.style.display = 'none';
    }
}