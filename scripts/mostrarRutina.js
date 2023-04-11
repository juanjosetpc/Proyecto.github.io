function mostrarRutina() {

  //------- Esta seccion de codigo carga lo que es el titulo y la imagen de la cabecera de la rutina ------
  // Leer el parámetro search de la URL
  const params = new URLSearchParams(window.location.search);
  const titulo = params.get('nombreRutina');
  const imagen = params.get('urlImagen');
  const idRutina = params.get('idRutina');
  // Mostrar el título en la página
  const tituloElement = document.getElementById('nombreRutina');
  tituloElement.textContent = titulo;
  const divTituloBackgroundImage = document.getElementById('tituloRutina');
  divTituloBackgroundImage.style.backgroundImage = `url(${imagen})`;
  //------- Esta seccion de codigo carga lo que es el titulo y la imagen de la cabecera de la rutina ------


  //----------Carga el icono en blanco si el usuario tiene la rutina en favorita-----------
  const logeado = localStorage.getItem('Logeado');
  const favoritas = JSON.parse(localStorage.getItem(logeado + 'favoritas'));
  const fav = document.getElementById('corazon-svg');
  const path = fav.querySelector('path');
  if (favoritas.includes(idRutina)) {
    path.setAttribute('d', 'M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z');
  } else {
    path.setAttribute('d', 'm8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z');
  }
  //----------Carga el icono en blanco si el usuario tiene la rutina en favorita-----------

  //----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------
  fetch('https://raw.githubusercontent.com/juanjosetpc/ProyectoInterfaces/gh-pages/ficheros%20json/rutinas.json')
    .then(response => response.json())
    .then(data => {

      const rutinaAccordion = document.getElementById('rutinaAccordion');

      data.rutinas[idRutina].dias.forEach((dia, index) => {
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
          ejercicioCardHeader.classList.add('card-header');
          ejercicioCardHeader.textContent = ejercicio.nombre;

          const ejercicioCardBody = document.createElement('div');
          ejercicioCardBody.classList.add('card-body');

          const imagen = document.createElement('img');
          imagen.classList.add('img-fluid', 'rounded');
          imagen.setAttribute('src', ejercicio.imagen);

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

function mostrarRutina2() {
  // Mostrar el título en la página
  const tituloElement = document.getElementById('nombreRutina');
  const params = new URLSearchParams(window.location.search);
  const idRutina = params.get('idRutina');
  const logeado = localStorage.getItem('Logeado');
  const data = JSON.parse(localStorage.getItem(logeado+"rutinaMia"+idRutina));
  tituloElement.textContent = data.titulo;

  // ----------Crea el contenido dinamicamente (desplegables y tarjetas con los ejercicios)--------
  const rutinaAccordion = document.getElementById('rutinaAccordion');

  data.dias.forEach((dia, index) => {
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

    if(dia.ejercicios.length > 0){
      dia.ejercicios.forEach(ejercicio => {
        const ejercicioCard = document.createElement('div');
        ejercicioCard.setAttribute('class', 'row justify-content-start col-md-6 mt-2 mb-2')
        ejercicioCard.classList.add('card');

        const ejercicioCardHeader = document.createElement('div');
        ejercicioCardHeader.classList.add('card-header');
        ejercicioCardHeader.textContent = ejercicio.nombre;

        const ejercicioCardBody = document.createElement('div');
        ejercicioCardBody.classList.add('card-body');

        const imagen = document.createElement('img');
        imagen.classList.add('img-fluid', 'rounded');
        imagen.setAttribute('src', ejercicio.imagen);

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
