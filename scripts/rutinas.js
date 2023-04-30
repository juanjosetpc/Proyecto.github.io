// Obtener el contenedor de las rutinas
const rutinasContainer = document.getElementById('rutinas-container');

// Obtener los datos JSON mediante la función fetch
fetch('https://github.com/juanjosetpc/ProyectoInterfaces.github.io/blob/gh-pages/ficheros%20json/rutinasPrevia.json')
  .then(response => response.json()) // Parsear la respuesta como JSON
  .then(data => {
    // Recorrer las rutinas y crear los elementos HTML correspondientes
    data.rutinas.forEach(rutina => {
      // Crear el div principal
      const div = document.createElement('div');
      div.className = rutina.div.class;
      div.setAttribute('data-dias', rutina.div['data-dias']);

      // Crear la imagen
      const img = document.createElement('img');
      img.id = rutina.div.children[0].img.id;
      img.src = rutina.div.children[0].img.src;
      img.alt = rutina.div.children[0].img.alt;
      div.appendChild(img);

      // Crear el div gris
      const divGris = document.createElement('div');
      divGris.className = rutina.div.children[1].div.class;

      // Crear el enlace
      const a = document.createElement('a');
      a.href = rutina.div.children[1].div.children[0].a.href + '?idRutina=' + rutina.div.children[1].div.children[0].a['data-idRutina'] + '&nombreRutina=' + encodeURIComponent(rutina.div.children[1].div.children[0].a['data-nombreRutina']) + '&urlImagen=' + rutina.div.children[1].div.children[0].a['data-urlImagen'];
      a.setAttribute('data-nombreRutina', rutina.div.children[1].div.children[0].a['data-nombreRutina']);
      a.setAttribute('data-urlImagen', rutina.div.children[1].div.children[0].a['data-urlImagen']);
      a.setAttribute('data-idRutina', rutina.div.children[1].div.children[0].a['data-idRutina']);
      a.className = rutina.div.children[1].div.children[0].a.class;
      a.innerText = rutina.div.children[1].div.children[0].a.text;
      divGris.appendChild(a);

      // Agregar el div gris al div principal
      div.appendChild(divGris);

      // Agregar el div principal al contenedor de rutinas
      rutinasContainer.appendChild(div);
    });
  })
  .catch(error => console.error(error));
//---------------------------------------------------------------------------------
const select = document.getElementById('filtro-dias');
const elementos = document.getElementsByClassName('image-container');

select.addEventListener('change', (e) => {
  const valor = e.target.value;
  
  for (let i = 0; i < elementos.length; i++) {
    const dias = elementos[i].getAttribute('data-dias');
    
    if (valor === 'todos' || dias === valor) {
      elementos[i].style.display = 'block';
    } else {
      elementos[i].style.display = 'none';
    }
  }
});

