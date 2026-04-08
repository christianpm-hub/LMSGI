const marca = document.getElementById("marca");
const modelo = document.getElementById("modelo");
const imagen = document.getElementById("imagen");
const enviar = document.getElementById("enviar");
const mar = document.getElementById("mar");
const mod = document.getElementById("mod");
const imag = document.getElementById("imag");

enviar.addEventListener("click", transicion);

function transicion(){
    const m = document.createElement("h3");
    const mo = document.createElement("h3");
    const img = document.createElement("img");

    mar.appendChild(m);
    mod.appendChild(mo);
    imag.appendChild(img);

    m.textContent = marca.value;
    mo.textContent = modelo.value;
    img.src = imagen.value;

    marca.remove();
    modelo.remove();
    imagen.remove();
    enviar.remove();
}

