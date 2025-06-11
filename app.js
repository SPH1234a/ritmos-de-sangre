
function mostrarSeccion(id) {
  const secciones = document.querySelectorAll('main section');
  secciones.forEach(sec => sec.style.display = 'none');
  const activa = document.getElementById(id);
  if (activa) activa.style.display = 'block';
}

function toggleSubmenu() {
  const submenu = document.querySelector('.submenu');
  if (submenu.style.display === 'block') {
    submenu.style.display = 'none';
  } else {
    submenu.style.display = 'block';
  }
}

function expandirImagen(img) {
  const modal = document.getElementById('modal');
  const imagenExpandida = document.getElementById('imagenExpandida');
  imagenExpandida.src = img.src;
  modal.style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}

window.onload = () => {
  mostrarSeccion('inicio');
};
