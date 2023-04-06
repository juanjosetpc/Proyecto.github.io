const usuario = document.getElementById('usuario');
const password = document.getElementById('password');
const edad = document.getElementById('edad');
const peso = document.getElementById('peso');
const email = document.getElementById('email');
const telefono = document.getElementById('telefono');

const guardar = document.getElementById('guardar');
const yatengo = document.getElementById('yatengo');

const storage = window.localStorage;

guardar.addEventListener('click', guardarUser);
yatengo.addEventListener('click',volverInicio);

function guardarUser()
{
    const user = usuario.value;
    const contrasena = password.value;
    const edadInput = edad.value;
    const pesoInput = peso.value;
    const emailInput = email.value;
    const telefonoInput = telefono.value;

    
    if(user==null || user=="" || contrasena==null || contrasena=="")
    {
        alert("Introduzca correctamente los datos.");
    }
    else
    {
        let myData = {contrasena:contrasena,edad:edadInput,peso:pesoInput,telefono:telefonoInput,email:emailInput};
        
        storage.setItem(user,JSON.stringify(myData));
    
        window.location.href = "/InicioSesion.html";
    }
}

function volverInicio()
{
    window.location.href = "/InicioSesion.html";
}