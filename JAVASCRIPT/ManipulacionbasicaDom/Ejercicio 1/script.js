const button = document.getElementById("agregar");
const ul = document.getElementById("lista");
let contador = 2;

button.addEventListener("click", añadirelemento);

function añadirelemento(){
    const li = document.createElement("li");
    contador++;

    li.textContent = "Elemento " + contador; 

    ul.appendChild(li);

    li.addEventListener("click", function eliminarelemento(){
        li.remove();
    })
}