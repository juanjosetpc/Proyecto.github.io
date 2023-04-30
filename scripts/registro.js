const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const edad = document.getElementById('edad');
const peso = document.getElementById('peso');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');

const guardar1 = document.getElementById('guardar');
const yatengo = document.getElementById('yatengo');

const storage = window.localStorage;
var input = document.getElementById("myInput");


guardar1.addEventListener('click', guardarUser);

yatengo.addEventListener('click',volverInicio);

function guardarUser()
{
    const user = usuario.value;
    const contrasena = password.value;
    const edadInput = edad.value;
    const pesoInput = peso.value;
    const emailInput = email.value;
    const telefonoInput = telefono.value;

    
    if(user==null || user==""  )
    {
        alert("Campo Usuario no completado");
    }
    else if(storage.getItem(user) != null)
    {
      alert("Ya existe ese Usuario.");
    }
    else if(contrasena==null || contrasena=="")
    {
      alert("Campo Contraseña no completado");
    }
    else if(contrasena.length <= 6)
    {
      alert("La Longitud de la Contraseña tiene que ser mayor que 6.");
    }
    else
    {
        let myData = {contrasena:contrasena,edad:edadInput,peso:pesoInput,telefono:telefonoInput,email:emailInput};
        
        storage.setItem(user,JSON.stringify(myData));
        storage.setItem(user+"misRutinas",0);
        storage.setItem(user+"favoritas", JSON.stringify([]));
    
        window.location.href = "InicioSesion.html";
    }
}

function volverInicio()
{
    window.location.href = "InicioSesion.html";
}

var icon = document.getElementById("icono")
icon.style.cursor = "pointer"
icon.style.height = "85%"
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


