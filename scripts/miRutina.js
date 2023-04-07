const titulo = document.getElementById("tituloMisRutinas");
const titulo2 = document.getElementById("tituloMisFavoritas");
titulo.style.cursor = "pointer";
titulo2.style.cursor = "pointer";
var i = 0;
var i2 = 0;

function abrir(){
    const padre = document.getElementById("misRutinas");
    if(i == 0){
        i++;
        padre.style.marginBottom = "30%";
        padre.style.height = "30%";
        titulo.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";
    }else{
        i--;
        padre.style.marginBottom = "0.2%";
        padre.style.height = "0%";
        titulo.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }
}

function abrir2(){
    const padre = document.getElementById("rutinasFav");
    if(i2 == 0){
        i2++;
        padre.style.marginBottom = "30%";
        padre.style.height = "30%";
        titulo2.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";

    }else{
        i2--;
        padre.style.marginBottom = "0%";
        padre.style.height = "0%";
        titulo2.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }
}

titulo.addEventListener("click",abrir);
titulo2.addEventListener("click",abrir2);


const modalClose = document.getElementById("modalClose");
const tituloInput = document.getElementById("tituloInput");
const descripcion = document.getElementById("descripcion");
const dias = document.getElementById("dias");
const aceptar = document.getElementById("aceptar");

modalClose.addEventListener("click",function () {tituloInput.value = '';descripcion.value = '';dias.value = '';});

aceptar.addEventListener("click",crearRutina);
    

function crearRutina()
{  
    const rutina = {titulo:tituloInput.value,dias:dias.value,descripcion:descripcion.value};

    const user = localStorage.getItem("Logeado");
    var misRutinasNumber = localStorage.getItem(user+"misRutinas");
    misRutinasNumber = parseInt(misRutinasNumber) + 1;
    storage.setItem(user+"misRutinas",misRutinasNumber);

    localStorage.setItem(user+"rutinaMia"+misRutinasNumber,JSON.stringify(rutina));
    tituloInput.value = '';descripcion.value = '';dias.value = '';
}