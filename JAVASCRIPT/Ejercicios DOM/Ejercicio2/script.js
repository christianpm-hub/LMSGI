const div = document.getElementById('caja');
const button = document.getElementById('color');

button.addEventListener('click', cambiarestilo);

function cambiarestilo (){
   div.style.backgroundColor = 'blue';
   div.style.color = 'white';
}