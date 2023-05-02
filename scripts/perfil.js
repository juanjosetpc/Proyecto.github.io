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


const password = document.getElementById("password");
const peso = document.getElementById("peso");
const edad = document.getElementById("edad");
const email = document.getElementById("email");
const telefono = document.getElementById("telefono");


password.value = myData.contrasena;
peso.value = myData.peso;
edad.value = myData.edad;
email.value = myData.email;
telefono.value = myData.telefono;

const aceptar = document.getElementById("aceptar");

aceptar.addEventListener("click",guardar)

function guardar()
{
    const user = current;
    const contrasena = password.value;
    const edadInput = edad.value;
    const pesoInput = peso.value;
    const emailInput = email.value;
    const telefonoInput = telefono.value;

    if(contrasena==null || contrasena=="" || contrasena.length <= 6)
    {
        alert("La Longitud de la Contraseña tiene que ser mayor que 6.");
        
    }
    else
    {
        
        let myData = {contrasena:contrasena,edad:edadInput,peso:pesoInput,telefono:telefonoInput,email:emailInput};
        
        storage.setItem(user,JSON.stringify(myData));
        storage.setItem(user+"misRutinas",0);
        storage.setItem(user+"favoritas", JSON.stringify([]));
        location.reload();
       
    }
    location.reload();
}

var icon = document.getElementById("icono")
icon.style.cursor = "pointer"
icon.style.height = "100%"
function togglePassword() {
    var passwordField = document.getElementById("password");
    
    if (passwordField.type === "password") {
      passwordField.type = "text";
      
      icon.classList.remove("bi-eye");
      icon.classList.add("bi-eye-slash");
    } else {
      passwordField.type = "password";
      icon.classList.remove("bi-eye-slash");
      icon.classList.add("bi-eye");
    }
  }

  icon.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      togglePassword();
      
    }
  });