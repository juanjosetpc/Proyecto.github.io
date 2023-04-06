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
    const imagen = enlace.getAttribute('data-urlImagen');
    const idRutina = enlace.getAttribute('data-idRutina');
    // Redirigir a la nueva página con los datos de la rutina en el parámetro search
    window.location.href = `rutinaDefaultEnDetalle.html?nombreRutina=${encodeURIComponent(titulo)}&urlImagen=${encodeURIComponent(imagen)}&idRutina=${encodeURIComponent(idRutina)}`;
  });
});


//---------------------------------------------------------------------------------------
const dia = document.getElementById("tituloDias");
dia.style.cursor = "pointer";
var i = 0;

function abrir(){
  const padre = document.getElementById("Dias");
  if(i == 0){
      i++;
      padre.style.marginBottom = "30%";
      padre.style.height = "30%";
      dia.innerHTML = "Lunes <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";
  }else{
      i--;
      padre.style.marginBottom = "0.2%";
      padre.style.height = "0%";
      dia.innerHTML = "Lunes <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
  }
}

dia.addEventListener("click",abrir);

//--------------------------------------------------------------------------------------------
const favo = document.getElementById("corazon");
favo.style.cursor = "pointer";
var i = 0;

function fav(){
  if(i == 0){
      i++;
      favo.innerHTML = "<svg xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-heart-fill' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z'/></svg>";
  }else{
      i--;
      favo.innerHTML = "<svg id='corazon' xmlns='http://www.w3.org/2000/svg' width='30' height='30' fill='currentColor' class='bi bi-heart' viewBox='0 0 16 16'><path d='m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z'/></svg>";
  }
}

favo.addEventListener("click",fav);