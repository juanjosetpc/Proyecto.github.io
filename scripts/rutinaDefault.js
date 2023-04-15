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

const params = new URLSearchParams(window.location.search);
const idRutina = params.get('idRutina');

const user = localStorage.getItem('Logeado');


const favo = document.getElementById('corazon-svg');
favo.style.cursor = "pointer";
const path = favo.querySelector('path');

favo.addEventListener("click", function() {
  const favoritas = JSON.parse(localStorage.getItem(logeado + 'favoritas'));
  if (!favoritas.includes(idRutina)) {
    favoritas.push(idRutina);
    favoritas.sort();
    localStorage.setItem(logeado + 'favoritas', JSON.stringify(favoritas));
    path.setAttribute('d', 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z');
    
    $(favo).popover({
      content: 'Añadido a mis rutinas favoritas',
      placement: 'top',
      trigger: 'focus'
    });

  } else {
    favoritas.splice(favoritas.indexOf(idRutina), 1);
    favoritas.sort();
    localStorage.setItem(logeado + 'favoritas', JSON.stringify(favoritas));
    path.setAttribute('d', 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z');

    $(favo).popover({
      content: 'Eliminado de mis rutinas favoritas',
      placement: 'top',
      trigger: 'focus'
    });

  }

  $(favo).popover('show');
  setTimeout(function() {
    $(favo).popover('dispose');
  }, 1200);
  
});

//--------------------------------------------------------------------------------------------

// const dia = document.getElementById("tituloDias");
// dia.style.cursor = "pointer";
// var i = 0;

// function abrir(){
//   const padre = document.getElementById("Dias");
//   if(i == 0){
//       i++;
//       padre.style.marginBottom = "30%";
//       padre.style.height = "30%";
//       dia.innerHTML = "Lunes <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";
//   }else{
//       i--;
//       padre.style.marginBottom = "0.2%";
//       padre.style.height = "0%";
//       dia.innerHTML = "Lunes <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
//   }
// }

// dia.addEventListener("click",abrir);