const numero = Math.floor(Math.random()*10)+1;
const button = document.getElementById('probar');
const input = document.getElementById('intento');
let intentos = 0;
button.addEventListener('click', AdivinarNumero);

function AdivinarNumero(){
    const intento = Number(input.value);
    if(intento > numero){
        intentos++;
        alert('El número es menor. Llevas ' + intentos + ' intentos.');
    } else if (intento < numero){
        intentos++;
        alert('El número es mayor. Llevas ' + intentos + ' intentos.');
    } else if(intento == numero){
        intentos++;
        alert('El número es correcto. Adivinado en ' + intentos + ' intentos.')
    }
}