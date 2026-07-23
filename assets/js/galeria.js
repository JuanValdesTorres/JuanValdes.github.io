function abrir(imagen) {
    document.getElementById("lightbox").style.display = "flex";
    document.getElementById("imagenGrande").src = imagen.src;
}

document.querySelector(".cerrar").onclick = function () {
    document.getElementById("lightbox").style.display = "none";
}

document.getElementById("lightbox").onclick = function (e) {
    if (e.target.id == "lightbox") {
        this.style.display = "none";
    }
}

document.addEventListener("contextmenu", function(e) {
    e.preventDefault();
});