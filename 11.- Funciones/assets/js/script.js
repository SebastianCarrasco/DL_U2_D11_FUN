// Modifica la función para recibir el elemento clickeado
function pintar(ele, color = 'green') {
    ele.style.backgroundColor = color;
}

// Selecciona el elemento y agrega el evento de clic
const ele = document.getElementById("ele1");
ele.addEventListener("click", function () {
    pintar(ele, 'yellow');
});

