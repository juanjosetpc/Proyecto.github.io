//Abrir y cerrar las filas de misRutinas y rutinasFavoritas
const titulo = document.getElementById("tituloMisRutinas");
const titulo2 = document.getElementById("tituloMisFavoritas");
titulo.style.cursor = "pointer";
titulo2.style.cursor = "pointer";
var i = 0;
var i2 = 0;

function abrir() {
    if (i == 0) {
        i++;
        document.querySelectorAll(".miRutina").forEach(a => a.style.display = "block");
        titulo.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16' id='svg1' tabindex='0'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";
    } else {
        i--;
        document.querySelectorAll(".miRutina").forEach(a => a.style.display = "none");
        titulo.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16' id='svg1' tabindex='0'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }

    svg1Scroll();
}

function abrir2() {
    if (i2 == 0) {
        i2++;
        document.querySelectorAll(".rutinaFav").forEach(a => a.style.display = "block");
        titulo2.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16' id='svg2' tabindex='0'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";

    } else {
        i2--;
        document.querySelectorAll(".rutinaFav").forEach(a => a.style.display = "none");
        titulo2.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16' id='svg2' tabindex='0'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }

    svg2Scroll();
}

titulo.addEventListener("click", abrir);
titulo2.addEventListener("click", abrir2);

//Aparicion de pop up
const modalClose1 = document.getElementById("modalClose1");
const modalClose2 = document.getElementById("modalClose2");
const tituloInput = document.getElementById("tituloInput");
const descripcion = document.getElementById("descripcion");
const lunes = document.getElementById("lunes");
const martes = document.getElementById("martes");
const miercoles = document.getElementById("miercoles");
const jueves = document.getElementById("jueves");
const viernes = document.getElementById("viernes");
const sabado = document.getElementById("sabado");
const domingo = document.getElementById("domingo");

modalClose1.addEventListener("click", function () {
    tituloInput.value = ''; descripcion.value = '';
});

modalClose2.addEventListener("click", function () {
    lunes.checked = false;
    martes.checked = false;
    miercoles.checked = false;
    jueves.checked = false;
    viernes.checked = false;
    sabado.checked = false;
    domingo.checked = false;
    //Estas dos lineas eliminan el problema que hacia que al cerrar la pagina se quedara en standby
    var modalBackdrop = document.querySelector(".modal-backdrop");
    modalBackdrop.parentNode.removeChild(modalBackdrop);
});

aceptar.addEventListener("click", crearRutina);

const storage = window.localStorage;

function crearRutina() {
    const rutina = {
        titulo: tituloInput.value,
        descripcion: descripcion.value,
        dias: []
    };

    

    if (lunes.checked) {
        rutina.dias.push({ dia: 'Lunes', ejercicios: [] });
    }
    
    if (martes.checked) {
        rutina.dias.push({ dia: 'Martes', ejercicios: [] });
    }
    
    if (miercoles.checked) {
        rutina.dias.push({ dia: 'Miércoles', ejercicios: [] });
    }
    
    if (jueves.checked) {
        rutina.dias.push({ dia: 'Jueves', ejercicios: [] });
    }
    
    if (viernes.checked) {
        rutina.dias.push({ dia: 'Viernes', ejercicios: [] });
    }
    
    if (sabado.checked) {
        rutina.dias.push({ dia: 'Sábado', ejercicios: [] });
    }
    
    if (domingo.checked) {
        rutina.dias.push({ dia: 'Domingo', ejercicios: [] });
    }

    if(rutina.titulo == null || rutina.titulo == "")
    {
        alert("Campo Título Vacío");
    }
    else if(rutina.dias.length == 0)
    {
        alert("No hay días seleccionados");
    }
    else
    {
    const user = localStorage.getItem("Logeado");
    var misRutinasNumber = localStorage.getItem(user + "misRutinas");
    misRutinasNumber = parseInt(misRutinasNumber) + 1;
    storage.setItem(user + "misRutinas", misRutinasNumber);

    localStorage.setItem(user + "rutinaMia" + misRutinasNumber, JSON.stringify(rutina));
    }

    
    tituloInput.value = ''; descripcion.value = '';
    lunes.checked = false;
    martes.checked = false;
    miercoles.checked = false;
    jueves.checked = false;
    viernes.checked = false;
    sabado.checked = false;
    domingo.checked = false;
    window.location.href = `miRutinaEnDetalle.html?idRutina=${encodeURIComponent(misRutinasNumber)}`;

    
}

// Creacion de cards Mis Favoritas
const user = localStorage.getItem('Logeado');
const arrayFavoritas = JSON.parse(localStorage.getItem(user + 'favoritas'));
const misFavoritas = document.getElementById("rutinasFav");


fetch('https://raw.githubusercontent.com/juanjosetpc/ProyectoInterfaces/gh-pages/ficheros%20json/rutinas.json')
    .then(response => response.json())
    .then(data => {
        for (let i = 0; i < data.rutinas.length; i++) {

            if (arrayFavoritas.includes(data.rutinas[i].id.toString())) {
                var newNode = document.createElement('div');
                newNode.style.width = "90%";
                newNode.classList.add("card");
                newNode.classList.add("rutinaFav");
                var newNode2 = document.createElement('div');
                newNode2.classList.add("card-body");
                var linkNombre = document.createElement('a');
                var a = document.createElement('button');
                var h6 = document.createElement('h6');
                linkNombre.classList.add("card-title");
                linkNombre.classList.add("text-start");
                a.classList.add("btn");
                a.classList.add("btn-danger");
                a.setAttribute("data-bs-toggle", "modal");
                a.setAttribute("data-bs-target", "#confirm-delete-modal");

                a.classList.add("float-end");

                linkNombre.innerText = data.rutinas[i].nombre;
                linkNombre.href = `rutinaDefaultEnDetalle.html?nombreRutina=${encodeURIComponent(data.rutinas[i].nombre)}&urlImagen=${encodeURIComponent(data.rutinas[i].banner)}&idRutina=${encodeURIComponent(i)}`;
                a.innerHTML = "Borrar";
                h6.innerHTML = data.rutinas[i].descripcion;
                newNode2.appendChild(a);
                newNode2.appendChild(linkNombre);

                newNode2.appendChild(h6);

                newNode.appendChild(newNode2);
                misFavoritas.appendChild(newNode);

                //Variable temporal para asignar correctamente el id de la rutina al boton correspondiente
                let idRutina = data.rutinas[i].id.toString(); 

                let confirmDeleteButton = document.getElementById("confirm-delete-button");
                a.addEventListener("click", function () {
                    confirmDeleteButton.addEventListener("click", function () {
                        arrayFavoritas.splice(arrayFavoritas.indexOf(idRutina), 1);
                        localStorage.setItem(user + 'favoritas', JSON.stringify(arrayFavoritas));
                        location.reload();
                    });
                });

            }
        }
    });

  

//Cards de mis rutinas
const divFavoritas = document.getElementById("divFavoritas");
var misRutinasNumber = localStorage.getItem(user + "misRutinas");

for (let index = 0; index < misRutinasNumber; index++) {

    var newNode = document.createElement('div');
    newNode.style.width = "90%";
    newNode.classList.add("card");
    newNode.classList.add("miRutina");
    var newNode2 = document.createElement('div');
    newNode2.classList.add("card-body");
    var linkNombre = document.createElement('a');
    var a = document.createElement('button');
    var h6 = document.createElement('h6');
    linkNombre.classList.add("card-title");
    linkNombre.classList.add("text-start");
    a.classList.add("btn");
    a.classList.add("btn-danger");
    a.classList.add("float-end");
    a.setAttribute("data-bs-toggle", "modal");
    a.setAttribute("data-bs-target", "#confirm-delete-modal");

    let confirmDeleteButton = document.getElementById("confirm-delete-button");
    a.addEventListener("click", function () {
        confirmDeleteButton.addEventListener("click", function () {
            localStorage.removeItem(user + "rutinaMia" + (index + 1));

            location.reload();
        });
    });


    var miRutina = JSON.parse(localStorage.getItem(user + "rutinaMia" + (index + 1)));

    if (!(miRutina == null)) {
        linkNombre.innerText = miRutina.titulo;
        linkNombre.href = `miRutinaEnDetalle.html?idRutina=${encodeURIComponent(index+1)}`;
        a.innerHTML = "Borrar";
        h6.innerHTML = miRutina.descripcion;
        newNode2.appendChild(a);
        newNode2.appendChild(linkNombre);

        newNode2.appendChild(h6);

        newNode.appendChild(newNode2);
        divFavoritas.appendChild(newNode);
    }

}

function svg2Scroll()
{
    var rutinasFav = document.getElementById("svg2");
    
    rutinasFav.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        abrir2();
        
      }
    });
}
function svg1Scroll()
{
    var misRutinas = document.getElementById("svg1");
    
    misRutinas.addEventListener("keydown", function(event) {
      if (event.key === "Enter") {
        abrir();
        
      }
    });
}

svg1Scroll();

svg2Scroll();