const file = document.getElementById("fileInput");
const image = document.getElementById("displayImage");

const storage = window.localStorage;
const current =  localStorage.getItem("Logeado");
let myData = JSON.parse(storage.getItem(current));

const username = document.getElementById("username");
username.innerHTML = current;

const edadcolumna = document.getElementById("edadcolumna");
const pesocolumna = document.getElementById("pesocolumna");
const emailcolumna = document.getElementById("emailcolumna");
const telefonocolumna = document.getElementById("telefonocolumna");

edadcolumna.innerHTML = myData.edad;
pesocolumna.innerHTML = myData.peso;
emailcolumna.innerHTML = myData.email;
telefonocolumna.innerHTML = myData.telefono;

file.addEventListener("change",function () {
    const reader = new FileReader();

    reader.addEventListener("load", () => {storage.setItem(current+"image",reader.result)});

    reader.readAsDataURL(this.files[0]);
    location.reload();
});

document.addEventListener("DOMContentLoaded",() => {
    const recentImageDataUrl = localStorage.getItem(current+"image");

    if(recentImageDataUrl)
    {
        image.setAttribute("src",recentImageDataUrl);
        
    }
});