const contador = document.getElementById("contador");
const sumar = document.getElementById("sumar");
const restar = document.getElementById("restar");
const reset = document.getElementById("reset");

let valor = localStorage.getItem("valor");
contador.textContent = valor;

sumar.addEventListener("click", sum);
restar.addEventListener("click", rest);
reset.addEventListener("click", resetear);

function sum(){
    valor++;
    localStorage.setItem("valor", valor);
    contador.textContent = valor;
}

function rest(){
    valor--;
    localStorage.setItem("valor", valor);
    contador.textContent = valor;
}

function resetear(){
    valor = 0;
    localStorage.setItem("valor", valor);
    contador.textContent = valor;
}