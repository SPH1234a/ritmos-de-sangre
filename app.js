// Mostrar la sección seleccionada
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll("main section");
  secciones.forEach(sec => sec.classList.remove("active"));

  const target = document.getElementById(id);
  if (target) {
    target.classList.add("active");
    window.scrollTo({ top: 0, behavior: "smooth" }); // desplazamiento suave
  }
}

// Alternar visibilidad del submenú de sedes
function toggleSubmenu() {
  const submenu = document.querySelector(".has-submenu");
  submenu.classList.toggle("open");
}

// Expandir imagen de la galería en modal
function expandirImagen(img) {
  const modal = document.getElementById("modal");
  const imagenExpandida = document.getElementById("imagenExpandida");

  if (modal && imagenExpandida) {
    imagenExpandida.src = img.src;
    imagenExpandida.alt = img.alt;
    modal.style.display = "flex";
    document.body.style.overflow = "hidden"; // evita scroll de fondo
  }
}

// Cerrar el modal de imagen
function cerrarModal() {
  const modal = document.getElementById("modal");
  if (modal) {
    modal.style.display = "none";
    document.body.style.overflow = "auto";
  }
}

// Cerrar el submenú si se hace clic fuera de él
document.addEventListener("click", function (event) {
  const submenu = document.querySelector(".has-submenu");
  if (submenu && !submenu.contains(event.target)) {
    submenu.classList.remove("open");
  }
});

// Accesibilidad: cerrar modal con tecla ESC
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    cerrarModal();
  }
});
