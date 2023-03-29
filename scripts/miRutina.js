const titulo = document.getElementById("misRutinas");
const titulo2 = document.getElementById("rutinasFav");
titulo.style.cursor = "pointer";
titulo2.style.cursor = "pointer";
var i = 0;
var i2 = 0;

function abrir(){
    if(i == 0){
        i++;
        titulo.style.marginBottom = "30%";
        titulo.style.height = "30%";
        var tituloMisFavoritas = document.querySelector("#tituloMisRutinas");
        tituloMisFavoritas.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";
    }else{
        i--;
        titulo.style.marginBottom = "0.2%";
        titulo.style.height = "0%";
        var tituloMisFavoritas = document.querySelector("#tituloMisRutinas");
        tituloMisFavoritas.innerHTML = "Mis Rutinas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }
}

function abrir2(){
    if(i2 == 0){
        i2++;
        titulo2.style.marginBottom = "30%";
        titulo2.style.height = "30%";
        var tituloMisFavoritas = document.querySelector("#tituloMisFavoritas");
        tituloMisFavoritas.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-up' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z'/></svg>";

    }else{
        i2--;
        titulo2.style.marginBottom = "0%";
        titulo2.style.height = "0%";
        var tituloMisFavoritas = document.querySelector("#tituloMisFavoritas");
        tituloMisFavoritas.innerHTML = "Mis Favoritas <svg xmlns='http://www.w3.org/2000/svg' width='30' height='20' fill='currentColor' class='bi bi-chevron-down' viewBox='0 0 16 16'><path fill-rule='evenodd' d='M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z'/></svg>";
    }
}

titulo.addEventListener("click",abrir);
titulo2.addEventListener("click",abrir2);