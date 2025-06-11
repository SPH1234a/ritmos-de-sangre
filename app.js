
// app.js
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("main section");
  secciones.forEach((sec) => (sec.style.display = "none"));
  document.getElementById(id).style.display = "block";
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("inicio");

  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});

function toggleSubmenu() {
  const submenu = document.querySelector(".has-submenu");
  submenu.classList.toggle("open");
}

function expandirImagen(img) {
  const modal = document.getElementById("modal");
  const imagenExpandida = document.getElementById("imagenExpandida");
  imagenExpandida.src = img.src;
  modal.style.display = "flex";
}

function cerrarModal() {
  document.getElementById("modal").style.display = "none";
}
