// Define la URL del archivo JSON o la API que devuelve el JSON
const url = "../ficheros%20json/rutinasPrevia.json";

// Realiza una petición fetch() para obtener el JSON
fetch(url)
  .then(response => response.json())
  .then(miJson => {
    // Obtén el elemento contenedor
    const divPrincipal = document.getElementById("container");
    divPrincipal.className = miJson.div.class;
    divPrincipal.setAttribute("data-dias", miJson.div["data-dias"]);

    // Crea el elemento "img" y agrega los atributos correspondientes
    const imagen = document.createElement("img");
    imagen.id = miJson.div.children[0].img.id;
    imagen.src = miJson.div.children[0].img.src;
    imagen.alt = miJson.div.children[0].img.alt;
    divPrincipal.appendChild(imagen);

    // Crea el elemento "div" secundario y agrega los atributos correspondientes
    const divSecundario = document.createElement("div");
    divSecundario.className = miJson.div.children[1].div.class;

    // Crea el elemento "a" y agrega los atributos correspondientes
    const anclaje = document.createElement("a");
    anclaje.href = miJson.div.children[1].div.children[0].a.href + '?idRutina=' + miJson.div.children[1].div.children[0].a['data-idRutina'] + '&nombreRutina=' + encodeURIComponent(miJson.div.children[1].div.children[0].a['data-nombreRutina']) + '&urlImagen=' + miJson.div.children[1].div.children[0].a['data-urlImagen'];
    anclaje.setAttribute("data-nombreRutina", miJson.div.children[1].div.children[0].a["data-nombreRutina"]);
    anclaje.setAttribute("data-urlImagen", miJson.div.children[1].div.children[0].a["data-urlImagen"]);
    anclaje.setAttribute("data-idRutina", miJson.div.children[1].div.children[0].a["data-idRutina"]);
    anclaje.className = miJson.div.children[1].div.children[0].a.class;
    anclaje.textContent = miJson.div.children[1].div.children[0].a.text;

    // Agrega el elemento "a" al elemento "div" secundario
    divSecundario.appendChild(anclaje);

    // Agrega el elemento "div" secundario al "div" principal
    divPrincipal.appendChild(divSecundario);

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

