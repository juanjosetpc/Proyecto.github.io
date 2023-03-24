
const continuar = document.getElementById('continuar');
const registrar = document.getElementById('registrarse');

const user = document.getElementById('user');
const contrasena = document.getElementById('contrasena');

const storage = window.localStorage;

continuar.addEventListener('click',authenticate);
registrar.addEventListener('click',redirect);

function redirect()
{
    window.location.href = "/registro.html";
}

function authenticate()
{
    const user1 = user.value;
    const contrasena1 = contrasena.value;

    let contrasena2 = storage.getItem(user1);

    if(contrasena1==contrasena2 && contrasena1 != "")
    {
        window.location.href = "Inicio.html?current=" +user1 ;
    }
    else
    {
        alert("Datos Incorrectos");
    }
    

}