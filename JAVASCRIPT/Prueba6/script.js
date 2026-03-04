/*
let index = 0;
const carrusel = document.getElementsByClassName('imagenes');
const button1 = document.getElementById('boton1');
const button2 = document.getElementById('boton2');
const button3 = document.getElementById('boton3');

button1.addEventListener('click', function(){fboton(0)});
button2.addEventListener('click', function(){fboton(1)});
button3.addEventListener('click', function(){fboton(2)});

function fboton(index){
    for (let i = 0; i < carrusel.length; i++){
        carrusel[i].style.display = 'none'; 
    }
    carrusel[index].style.display = 'block';
}
*/

/*CON TIEMPO*/

let diapositivaactual = 0;
const carrusel = document.getElementsByClassName('imagenes');
mostrarcarrusel();

function mostrarcarrusel(){
    for (let i = 0;i<carrusel.length;i++){
        carrusel[i].style.display = 'none'
    }

    carrusel[diapositivaactual].style.display = 'block';
    diapositivaactual++;

    if(diapositivaactual >= carrusel.length){
        diapositivaactual = 0;
    }
    setTimeout(mostrarcarrusel, 1000);
}