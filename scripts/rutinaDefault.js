/**
 * El siguiente codigo en primera instancia recoge el nombre de la rutina por defecto y cuando se le da click al link 
 * para ver la rutina en detalle le manda como parametro por la url al nuevo html el nombre de la rutina, para generar el contenido
 * con javascript y no hacer un html diferente para cada rutina.
 */

// Seleccionar todos los enlaces
const enlaces = document.querySelectorAll('.miEnlace');

// Agregar un evento click a cada enlace
enlaces.forEach((enlace) => {
  enlace.addEventListener('click', (event) => {
    // Evitar que se cargue la página por defecto
    event.preventDefault();

    // Obtener el título del enlace
    const titulo = enlace.getAttribute('data-nombreRutina');

    // Redirigir a la nueva página con los datos de la rutina en el parámetro search
    window.location.href = `rutinaDefaultEnDetalle.html?nombreRutina=${encodeURIComponent(titulo)}`;
  });
});

// Leer el parámetro search de la URL
const params = new URLSearchParams(window.location.search);
const titulo = params.get('nombreRutina');

// Mostrar el título en la página
const tituloElement = document.getElementById('nombreRutina');
tituloElement.textContent = titulo;

