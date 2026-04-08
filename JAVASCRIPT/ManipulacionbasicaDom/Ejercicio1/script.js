const button = document.getElementById("agregar");
const ul = document.getElementById("lista");
var contador = 2;

button.addEventListener("click", añadirelemento);

function añadirelemento(){
    const li = document.createElement("li");
    contador++;
    ul.appendChild(li);
    li.textContent = "Elemento " + contador; 
}