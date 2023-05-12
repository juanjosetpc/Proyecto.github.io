$(document).ready(function(){
    //Cambiar el color de All que es predefinido
    $('.category-list .categoryItem[category = "all"]').addClass('ct-item-active');

    $('.categoryItem').click(function(){
        //Guardo variable de categoria que haga click
        var catEjer = $(this).attr('category');
        console.log(catEjer);
        //Cambiar color al seleccionado
        $('.categoryItem').removeClass('ct-item-active');
        $(this).addClass('ct-item-active');
        //Oculto productos
        $(".col-lg-4 mb-3 d-flex align-items-stretch").hide();
        //Muestro productos de categoria seleccionada
        $('.col-lg-4 mb-3 d-flex align-items-stretch[category = "'+catEjer+'"]').show();

    });
    //Muestra todos los productos
    $('.categoryItem[category ="all"]').click(function(){
        $('.col-lg-4 mb-3 d-flex align-items-stretch').show();
    });
});

//Conecto el json con el html y me carga todos los objetos
var app ={};
var miCallback = datos =>{
    app.listaEjercicios=datos;
    var html=""
    html+= "<div class='container-fluid'>";
        html+= "<div class='row pt-5'>";
        html+= "<div class='col-12'>";
        html+= "<h2 class='text-uppercase border-bottom mb-4'>Coleccion de ejercicios</h2>";
        html+= "</div>";
        html+= "</div>";
        html+= "<div class='row'>";
    app.listaEjercicios.map(ejercicio => { 
        html+= "<div class='col-lg-4 mb-3 d-flex align-items-stretch' category ='"+ejercicio.tipoMuscular+"'>";
        html+= "<div class='col'>";
        html+= "<div class='card h-100' tabindex='0' >";
        html+= "<h3 class='card-title'>"+ejercicio.nombre+"</h3>";
        html+= "<div class='card-body d-flex flex-column'>";
        html+= "<p class='card-text mb-4'>Dificultad</p>";
        html+= "<img src='"+ejercicio.img+"' class='card-img-top' alt='Imagen de "+ejercicio.nombre+"'></img>";
        html+= "<button type='button' class='btn btn-primary mt-auto align-self-start' data-bs-toggle='modal' data-bs-target='#"+ejercicio.modalID+"'>Saber Mas</button>";
       
        html+= "<div class='modal fade' id='"+ejercicio.modalID+"' tabindex='-1' aria-hidden='true' aria-labelledby='modalTitle"+ejercicio.modalID+"'>";
        html+= "<div class='modal-dialog'>";
        html+= "<div class='modal-content'>";
        html+= "<div class='modal-header'>";
        html+= "<h4 class='modal-title' id='modalTitle"+ejercicio.modalID+"'>¿Qué necesitas saber?</h4>";
        html+= "<button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>";
        html+= "</div>";
        html+= "<div class='modal-body'>";
        html+= "<h5>Una pequeña descripción del ejercicio:</h5>";
        html+= "<p>"+ejercicio.descripcion+"</p>";
        html+= "<h5>Errores más habituales: </h5>";
        html+= "<ul>";
        html+= "<li>"+ejercicio.error+"</li>";
        html+= "</ul>";
        html+= "<h5>Algunos consejos clave:</h5>";
        html+= "<ul>";
        html+= "<li>"+ejercicio.consejo+"</li>";
        html+= "</ul>";
        html+= "</div>";
        html+= "<div class='modal-footer'>";
        html+= "<button type='button' class='btn btn-secondary' data-bs-dismiss='modal' aria-label='Botón Cerrar Ventana'>Cerrar</button>";
        html+= "</div>";
        html+= "</div>";
        html+= "</div>";
        html+= "</div>";

        html+= "</div>";
        html+= "</div>";
        html+= "</div>";
        html+= "</div>";
    })
    document.getElementById("listado-ejercicios").innerHTML = html;
}
