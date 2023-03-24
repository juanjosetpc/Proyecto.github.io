const usuario = document.getElementById('usuario');
const email = document.getElementById('email');
const password = document.getElementById('password');

const guardar = document.getElementById('guardar');

const storage = window.localStorage;

guardar.addEventListener('click', guardarUser);

function guardarUser()
{
    const user = usuario.value;
    const dato2 = email.value;
    const contrasena = password.value;

    
    if(user==null || user=="" || dato2==null || dato2=="" || contrasena==null || contrasena=="")
    {
        alert("Introduzca correctamente los datos.");
    }
    else
    {
        let myData = {usuario:user,email:dato2};
        storage.setItem(user,contrasena);
        window.location.href = "/InicioSesion.html";
    }
}