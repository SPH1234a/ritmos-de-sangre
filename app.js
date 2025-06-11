
function mostrarSeccion(id) {
  document.querySelectorAll('main section').forEach(section => {
    section.style.display = 'none';
  });
  document.getElementById(id).style.display = 'block';
}

function toggleSubmenu() {
  const submenu = document.querySelector('.submenu');
  submenu.style.display = submenu.style.display === 'block' ? 'none' : 'block';
}

function expandirImagen(img) {
  const modal = document.getElementById('modal');
  const imagenExpandida = document.getElementById('imagenExpandida');
  imagenExpandida.src = img.src;
  modal.classList.add('show');
}

function cerrarModal() {
  document.getElementById('modal').classList.remove('show');
}

document.addEventListener("DOMContentLoaded", () => {
  mostrarSeccion("inicio");

  const hamburger = document.getElementById("hamburger");
  const sidebar = document.querySelector(".sidebar");

  hamburger.addEventListener("click", () => {
    sidebar.classList.toggle("hidden");
  });
});
