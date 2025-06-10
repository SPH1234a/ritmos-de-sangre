
function mostrarSeccion(id) {
  document.querySelectorAll("section").forEach(sec => sec.classList.remove("active"));
  document.getElementById(id).classList.add("active");
}

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
