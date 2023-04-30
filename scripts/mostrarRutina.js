const logeado = localStorage.getItem('Logeado');

let arrayEjerciciosJson; // Declarar la variable global
function miCallback(data) {
  arrayEjerciciosJson = data;
}
// Hacer la solicitud JSONP
const script = document.createElement('script');
script.src = 'https://juanjosetpc.github.io/PumpPower.github.io/ficheros%20json/listaEjercicios.jsonp';
script.async = true;
document.head.appendChild(script);

const parameters = new URLSearchParams(window.location.search);
const rutinaID = parameters.get('idRutina');

function mostrarRutina() {
  //------- Esta seccion de codigo carga lo que es el titulo y la imagen de la cabecera de la rutina ------
  // Leer el parámetro search de la URL
  const titulo = parameters.get('nombreRutina');
  const imagen = parameters.get('urlImagen');

  // Mostrar el título en la página
  const tituloElement = document.getElementById('nombreRutina');
  tituloElement.textContent = titulo;
  const divTituloBackgroundImage = document.getElementById('tituloRutina');
  divTituloBackgroundImage.style.backgroundImage = `url(${imagen})`;
  //------- Esta seccion de codigo carga lo que es el titulo y la imagen de la cabecera de la rutina ------


  //----------Carga el icono en blanco si el usuario tiene la rutina en favorita-----------
  const favoritas = JSON.parse(localStorage.getItem(logeado + 'favoritas'));
  const fav = document.getElementById('corazon-svg');
  const path = fav.querySelector('path');
  if (favoritas.includes(rutinaID)) {
    path.setAttribute('d', 'M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z');
  } else {
    path.setAttribute('d', 'M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z');
  }
  //----------Carga el icono en blanco si el usuario tiene la rutina en favorita-----------

  //----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------
  fetch('https://raw.githubusercontent.com/juanjosetpc/ProyectoInterfaces.github.io/gh-pages/ficheros%20json/rutinas.json')
  .then(response => response.json())
    .then(data => {
      const rutinaAccordion = document.getElementById('rutinaAccordion');
      data.rutinas[rutinaID].dias.forEach((dia, index) => {
        const card = document.createElement('div');
        card.setAttribute('class', 'accordion-item row')

        const h1 = document.createElement('h1');
        h1.setAttribute('class', 'accordion-header dia');

        btn = document.createElement('button');
        btn.setAttribute('type', 'button')
        btn.setAttribute('data-bs-toggle', 'collapse');
        btn.setAttribute('data-bs-target', `#dia-${index}`);
        btn.setAttribute('aria-expanded', 'true');
        btn.setAttribute('aria-controls', `#dia-${index}`);
        btn.setAttribute('aria-label', 'boton para desplegar la lista de ejercicios del dia ' + dia.dia);
        btn.textContent = dia.dia;

        const collapse = document.createElement('div');
        if (index === 0) {
          btn.setAttribute('class', 'accordion-button')
          collapse.setAttribute('class', 'accordion-collapse collapse show');

        } else {
          btn.setAttribute('class', 'accordion-button collapsed')
          collapse.setAttribute('class', 'accordion-collapse collapse')
        }

        h1.appendChild(btn);
        card.appendChild(h1);

        collapse.setAttribute('id', `dia-${index}`);

        const divEjerciciosAccordion = document.createElement('div');
        divEjerciciosAccordion.setAttribute('class', 'accordion-body');


        dia.ejercicios.forEach(ejercicio => {
          const ejercicioCard = document.createElement('div');
          ejercicioCard.setAttribute('class', 'row justify-content-start col-md-6 mt-2 mb-2')
          ejercicioCard.classList.add('card');

          const ejercicioCardHeader = document.createElement('div');
          ejercicioCardHeader.classList.add('card-header', 'd-flex', 'align-items-center');
          ejercicioCardHeader.textContent = arrayEjerciciosJson[ejercicio.idEjercicio].nombre;

          const nombreEjercicio = document.createElement('div');  
          nombreEjercicio.classList.add('nombre-ejercicio');
          ejercicioCardHeader.appendChild(nombreEjercicio);

          // Crear botón de ayuda
          const ayudaButton = document.createElement('button');
          ayudaButton.classList.add('btn', 'btn-link');
          ayudaButton.setAttribute('aria-label', 'obtener informacion del ejercicio');
          ayudaButton.innerHTML = '<i class="bi bi-info-circle-fill"></i>';
          ayudaButton.addEventListener('click', () => {
            const consejo = arrayEjerciciosJson[ejercicio.idEjercicio].consejo;
            const error = arrayEjerciciosJson[ejercicio.idEjercicio].error;
            const descripcion = arrayEjerciciosJson[ejercicio.idEjercicio].descripcion;
            const modalInfo = document.getElementById('modal-body-info-ejercicio');
            modalInfo.innerHTML = `
          <h6>Antes una breve descripción:</h6>
          <p>${descripcion}</p>
          <h6>Errores habituales:</h6>
          <ul>${error}</ul>
          <h6>Consejo clave:</h6>
          <ul>${consejo}</ul>`;
          });
          ayudaButton.setAttribute("data-bs-toggle", "modal");
          ayudaButton.setAttribute("data-bs-target", "#modal-info-ejercicio");

          ejercicioCardHeader.appendChild(ayudaButton);

          const ejercicioCardBody = document.createElement('div');
          ejercicioCardBody.classList.add('card-body');

          const imagen = document.createElement('img');
          imagen.classList.add('img-fluid', 'rounded');
          imagen.setAttribute('src', arrayEjerciciosJson[ejercicio.idEjercicio].img);
          imagen.setAttribute('alt', "imagen de ejercicio " + arrayEjerciciosJson[ejercicio.idEjercicio].nombre);

          const series = document.createElement('p');
          series.textContent = `Series: ${ejercicio.series}`;

          const repeticiones = document.createElement('p');
          repeticiones.textContent = `Repeticiones: ${ejercicio.repeticiones}`;

          ejercicioCardBody.appendChild(imagen);
          ejercicioCardBody.appendChild(series);
          ejercicioCardBody.appendChild(repeticiones);

          ejercicioCard.appendChild(ejercicioCardHeader);
          ejercicioCard.appendChild(ejercicioCardBody);

          divEjerciciosAccordion.appendChild(ejercicioCard);
        });

        collapse.appendChild(divEjerciciosAccordion);
        card.appendChild(collapse);

        rutinaAccordion.appendChild(card);
      });

    });
  //----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------

}

const miRutina = JSON.parse(localStorage.getItem(logeado + "rutinaMia" + rutinaID));

function mostrarRutina2() {
  // Mostrar el título en la página
  const tituloElement = document.getElementById('nombreRutina');
  tituloElement.textContent = miRutina.titulo;

  // ----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------
  const rutinaAccordion = document.getElementById('rutinaAccordion');

  miRutina.dias.forEach((dia, index) => {
    const card = document.createElement('div');
    card.setAttribute('class', 'accordion-item row')

    const h1 = document.createElement('h1');
    h1.setAttribute('class', 'accordion-header dia');

    btn = document.createElement('button');
    btn.setAttribute('type', 'button')
    btn.setAttribute('data-bs-toggle', 'collapse');
    btn.setAttribute('data-bs-target', `#dia-${index}`);
    btn.setAttribute('aria-expanded', 'true');
    btn.setAttribute('aria-controls', `#dia-${index}`);
    btn.setAttribute('aria-label', 'boton para desplegar la lista de ejercicios del dia ' + dia.dia);
    btn.textContent = dia.dia;

    const collapse = document.createElement('div');
    if (index === 0) {
      btn.setAttribute('class', 'accordion-button')
      collapse.setAttribute('class', 'accordion-collapse collapse show');

    } else {
      btn.setAttribute('class', 'accordion-button collapsed')
      collapse.setAttribute('class', 'accordion-collapse collapse')
    }

    h1.appendChild(btn);

    const btnAnadirEjercicio = document.createElement('button');
    btnAnadirEjercicio.setAttribute('type', 'button');
    btnAnadirEjercicio.setAttribute('class', 'btn btn-success');
    btnAnadirEjercicio.textContent = "Añadir ejercicio";
    btnAnadirEjercicio.setAttribute("data-bs-toggle", "modal");
    btnAnadirEjercicio.setAttribute("data-bs-target", "#modalAnadirEjercicio");
    btnAnadirEjercicio.addEventListener('click', () => anadirOEditarEjercicio(index, false));

    h1.appendChild(btnAnadirEjercicio);

    card.appendChild(h1);

    collapse.setAttribute('id', `dia-${index}`);

    const divEjerciciosAccordion = document.createElement('div');
    divEjerciciosAccordion.setAttribute('class', 'accordion-body');

    if (dia.ejercicios.length > 0) {
      dia.ejercicios.forEach(ejercicio => {
        const ejercicioCard = document.createElement('div');
        ejercicioCard.setAttribute('class', 'row justify-content-start col-md-6 mt-2 mb-2')
        ejercicioCard.classList.add('card');


        const ejercicioCardHeader = document.createElement('div');
        ejercicioCardHeader.classList.add('card-header', 'd-flex', 'align-items-center');

        const nombreEjercicio = document.createElement('div');
        nombreEjercicio.classList.add('nombre-ejercicio');
        nombreEjercicio.textContent = arrayEjerciciosJson[ejercicio.idEjercicio - 1].nombre;
        ejercicioCardHeader.appendChild(nombreEjercicio);

        // Crear botón de ayuda
        const ayudaButton = document.createElement('button');
        ayudaButton.classList.add('btn', 'btn-link');
        ayudaButton.setAttribute('aria-label', 'obtener informacion del ejercicio');
        ayudaButton.innerHTML = '<i class="bi bi-info-circle-fill"></i>';
        ayudaButton.addEventListener('click', () => {
          const consejo = arrayEjerciciosJson[ejercicio.idEjercicio - 1].consejo;
          const error = arrayEjerciciosJson[ejercicio.idEjercicio - 1].error;
          const descripcion = arrayEjerciciosJson[ejercicio.idEjercicio - 1].descripcion;
          const modalInfo = document.getElementById('modal-body-info-ejercicio');
          modalInfo.innerHTML = `
          <h6>Antes una breve descripción:</h6>
          <p>${descripcion}</p>
          <h6>Errores habituales:</h6>
          <ul>${error}</ul>
          <h6>Consejo clave:</h6>
          <ul>${consejo}</ul>`;
        });
        ayudaButton.setAttribute("data-bs-toggle", "modal");
        ayudaButton.setAttribute("data-bs-target", "#modal-info-ejercicio");

        // Crear dropdown
        const dropdown = document.createElement('div');
        dropdown.classList.add('dropdown');

        // Crear botón de dropdown
        const dropdownButton = document.createElement('button');
        dropdownButton.classList.add('btn', 'btn-secondary', 'dropdown-toggle');
        dropdownButton.setAttribute('type', 'button');
        dropdownButton.setAttribute('id', `dropdownMenuButton-${arrayEjerciciosJson[ejercicio.idEjercicio]}`);
        dropdownButton.setAttribute('data-bs-toggle', 'dropdown');
        dropdownButton.textContent = 'Options';

        // Crear menú de dropdown
        const dropdownMenu = document.createElement('div');
        dropdownMenu.classList.add('dropdown-menu');
        dropdownMenu.setAttribute('aria-labelledby', `dropdownMenuButton-${arrayEjerciciosJson[ejercicio.idEjercicio]}`);

        // Crear botón de editar
        const editarButton = document.createElement('button');
        editarButton.classList.add('dropdown-item');
        editarButton.textContent = 'Editar';
        editarButton.addEventListener('click', () => {
          editarEjercicio(index, ejercicio);
        });
        editarButton.setAttribute("data-bs-toggle", "modal");
        editarButton.setAttribute("data-bs-target", "#modalAnadirEjercicio");

        // Crear botón de eliminar
        const eliminarButton = document.createElement('button');
        eliminarButton.classList.add('dropdown-item');
        eliminarButton.textContent = 'Eliminar';
        eliminarButton.addEventListener('click', () => eliminarEjercicio(ejercicio.idEjercicio, index));


        dropdownMenu.appendChild(editarButton);
        dropdownMenu.appendChild(eliminarButton);

        dropdown.appendChild(dropdownButton);
        dropdown.appendChild(dropdownMenu);

        ejercicioCardHeader.appendChild(ayudaButton);
        ejercicioCardHeader.appendChild(dropdown);
        ejercicioCard.appendChild(ejercicioCardHeader);


        const ejercicioCardBody = document.createElement('div');
        ejercicioCardBody.classList.add('card-body');

        const imagen = document.createElement('img');
        imagen.classList.add('img-fluid', 'rounded');
        imagen.setAttribute('src', arrayEjerciciosJson[ejercicio.idEjercicio - 1].img);
        imagen.setAttribute('alt', "imagen de ejercicio " + arrayEjerciciosJson[ejercicio.idEjercicio-1].nombre);


        const series = document.createElement('p');
        series.textContent = `Series: ${ejercicio.series}`;

        const repeticiones = document.createElement('p');
        repeticiones.textContent = `Repeticiones: ${ejercicio.repeticiones}`;

        ejercicioCardBody.appendChild(imagen);
        ejercicioCardBody.appendChild(series);
        ejercicioCardBody.appendChild(repeticiones);

        ejercicioCard.appendChild(ejercicioCardHeader);
        ejercicioCard.appendChild(ejercicioCardBody);

        divEjerciciosAccordion.appendChild(ejercicioCard);
      });
    }

    collapse.appendChild(divEjerciciosAccordion);
    card.appendChild(collapse);

    rutinaAccordion.appendChild(card);
  });
  //----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------

}


function eliminarEjercicio(ejId, dia) {
  const diaConcreto = miRutina.dias[dia];
  const ejerciciosArray = diaConcreto.ejercicios;
  const indiceEjBorrar = ejerciciosArray.findIndex(ejercicio => ejercicio.idEjercicio === ejId);

  if (indiceEjBorrar !== -1) {
    ejerciciosArray.splice(indiceEjBorrar, 1);
  }
  localStorage.setItem(logeado + "rutinaMia" + rutinaID, JSON.stringify(miRutina));
  location.reload();
}

function editarEjercicio(dia, ejercicio) {
  const series = document.getElementById('seriesInput');
  const repeticiones = document.getElementById('repeticionesInput');
  const idEjercicio = document.getElementById('ejercicioIdInput');
  const search = document.getElementById('searchInput');
  series.value = ejercicio.series;
  repeticiones.value = ejercicio.repeticiones;
  idEjercicio.value = ejercicio.idEjercicio;
  search.value = arrayEjerciciosJson[ejercicio.idEjercicio-1].nombre;

  anadirOEditarEjercicio(dia, true, ejercicio.idEjercicio-1);
}


function anadirOEditarEjercicio(dia, editandoEjercicio, ejId) {
  buscadorEjercicios();

  document.getElementById('btnConfirmarAnadirEjercicio').addEventListener('click', () => {
    const series = document.getElementById('seriesInput');
    const repeticiones = document.getElementById('repeticionesInput');
    const idEjercicio = document.getElementById('ejercicioIdInput');
    if (searchInput.value.trim() !== '' && seriesInput.value.trim() !== '' && repeticionesInput.value.trim() !== '') {
      const ejercicioAInsertar = {
        series: series.value,
        repeticiones: repeticiones.value,
        idEjercicio: idEjercicio.value
      }

      if (editandoEjercicio) {
        const diaConcreto = miRutina.dias[dia];
        const ejerciciosArray = diaConcreto.ejercicios;
        const indiceEjercicioEditar = ejerciciosArray.findIndex(ejercicio => ejercicio.idEjercicio === ejId);
        console.log(indiceEjercicioEditar);
        miRutina.dias[dia].ejercicios.splice(indiceEjercicioEditar, 1, ejercicioAInsertar);
      } else { 
        miRutina.dias[dia].ejercicios.push(ejercicioAInsertar); 
      }

      localStorage.setItem(logeado + "rutinaMia" + rutinaID, JSON.stringify(miRutina));
      location.reload();

    } else {
      alert('Completa todos los campos')
    }
  });
}

function buscadorEjercicios() {
  const searchInput = document.getElementById('searchInput');
  const suggestions = document.getElementById('suggestions');
  const idEjercicio = document.getElementById('ejercicioIdInput');

  searchInput.addEventListener('input', async () => {
    const searchWord = searchInput.value.toLowerCase();
    try {
      const filteredExercises = arrayEjerciciosJson.filter(exercise => exercise.nombre.toLowerCase().includes(searchWord));
      suggestions.innerHTML = '';
      filteredExercises.forEach(exercise => {
        const li = document.createElement('li');
        li.textContent = exercise.nombre;
        li.addEventListener('click', () => {
          searchInput.value = exercise.nombre;
          idEjercicio.value = exercise.ejerID;
          suggestions.innerHTML = '';
        });
        suggestions.appendChild(li);
      });
    } catch (error) {
      console.error('Error al cargar los ejercicios:', error);
    }
  });

  //Hace que cuando hagas click fuera del buscador deje de mostrar las recomendaciones
  document.addEventListener('click', (e) => {
    if (e.target !== searchInput) {
      suggestions.innerHTML = '';
    }
  });
}

