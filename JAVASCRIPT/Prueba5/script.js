const numero = 5;
const button = document.getElementById('probar');
const input = document.getElementById('intento');

button.addEventListener('click', AdivinarNumero);

function AdivinarNumero(){
    const intento = Number(input.value);
    if(intento > numero){
        alert('El número es menor');
    } else if (intento < numero){
        alert('El número es mayor');
    } else if(intento == numero){
        alert('El número es correcto')
    }
}