
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

try {
    let myData = JSON.parse(storage.getItem(user1));
    const contrasena2 = myData.contrasena;
} catch (error) {
    alert("Usuario no registrado");
}
    let myData = JSON.parse(storage.getItem(user1));
    const contrasena2 = myData.contrasena;

    if(contrasena1==contrasena2 && contrasena1 != "")
    {
        window.location.href = "Inicio.html?current=" +user1 ;
        storage.setItem("Logeado",user1)
    }
    else
    {
        alert("Contraseña Incorrecta");
    }
    

}