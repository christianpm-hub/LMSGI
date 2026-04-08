const button = document.getElementById("agregar");
const ul = document.getElementById("lista");
let contador = 2;

button.addEventListener("click", añadirelemento);

function añadirelemento(){
    const li = document.createElement("li");
    const eliminar = document.createElement("button");
    contador++;

    eliminar.textContent = "eliminar";
    li.textContent = "Elemento " + contador; 

    ul.appendChild(li);
    li.appendChild(eliminar);

    eliminar.addEventListener("click", function eliminarelemento(){
        li.remove();
    })
}