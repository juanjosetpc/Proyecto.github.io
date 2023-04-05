function mostrarRutina() {
  fetch('https://raw.githubusercontent.com/juanjosetpc/ProyectoInterfaces/gh-pages/ficheros%20json/rutina.json')
  .then(response => response.json())
      .then(data => {
        const rutinaAccordion = document.getElementById('rutinaAccordion');
  
        data.dias.forEach((dia, index) => {
          const card = document.createElement('div');
          card.classList.add('card');
  
          const cardHeader = document.createElement('div');
          cardHeader.classList.add('card-header');
  
          const btn = document.createElement('button');
          btn.classList.add('btn', 'btn-link');
          btn.setAttribute('type', 'button');
          btn.setAttribute('data-toggle', 'collapse');
          btn.setAttribute('data-target', `#dia-${index}`);
          btn.textContent = dia.nombre;
  
          cardHeader.appendChild(btn);
          card.appendChild(cardHeader);
  
          const collapse = document.createElement('div');
          collapse.classList.add('collapse');
          collapse.setAttribute('id', `dia-${index}`);
  
          const cardBody = document.createElement('div');
          cardBody.classList.add('card-body');
  
          dia.ejercicios.forEach(ejercicio => {
            const ejercicioCard = document.createElement('div');
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
  
            cardBody.appendChild(ejercicioCard);
          });
  
          collapse.appendChild(cardBody);
          card.appendChild(collapse);
  
          rutinaAccordion.appendChild(card);
        });

        // Añadir evento click a los botones para que se expandan o contraigan las tarjetas
        const buttons = document.querySelectorAll('.btn-link');
        buttons.forEach((button) => {
          button.addEventListener('click', () => {
            const target = button.getAttribute('data-target');
            const collapse = document.querySelector(target);
            if (collapse.classList.contains('show')) {
              collapse.classList.remove('show');
            } else {
              collapse.classList.add('show');
            }
          });
        });
      });
}
