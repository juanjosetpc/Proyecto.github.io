
const continuar = document.getElementById('continuar');
const registrar = document.getElementById('registrarse');

const user = document.getElementById('user');
const contrasena = document.getElementById('contrasena');

const storage = window.localStorage;

continuar.addEventListener('click',authenticate);
registrar.addEventListener('click',redirect);
contrasena.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      event.preventDefault();
      authenticate();
    }
  });


function redirect()
{
    window.location.href = "./registro.html";
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
        window.location.href = "./ejercicios.html" ;
        storage.setItem("Logeado",user1)
    }
    else
    {
        alert("Contraseña Incorrecta");
    }
    

}

var icon = document.getElementById("icono")
icon.style.cursor = "pointer"
icon.style.height = "86%"
function togglePassword() {
    var passwordField = document.getElementById("contrasena");
    
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