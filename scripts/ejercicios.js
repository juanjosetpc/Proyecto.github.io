$(document).ready(function(){
    //En teoría con esto deberia cambiar el color de All que es predefinido pero no lo hace
    $('.category-list .categoryItem[category = "all"]').addClass('ct_item-active');

    $('.categoryItem').click(function(){
        //Guardo variable de categoria que haga click
        var catEjer = $(this).attr('category');
        console.log(catEjer);
        //Cambiar color al seleccionado (no lo hace)
        $('.categoryItem').removeClass('ct_item-active');
        $(this).addClass('ct_item-active');
        //Oculto productos
        $('.ejer-item').hide();
        //Muestro productos de categoria seleccionada
        $('.ejer-item[category = "'+catEjer+'"]').show();

    });
    //Muestra todos los productos
    $('.categoryItem[category ="all"]').click(function(){
        $('.ejer-item').show();
    });

});

//Conecto el json con el html y me carga todos los objetos
var app ={};
var miCallback = datos =>{
    app.listaEjercicios=datos;
    var html=""
    app.listaEjercicios.map(ejercicio => { 
        html+= "<div class = 'ejer-item' category = '"+ejercicio.tipoMuscular+"'>";
        html+= "<h3>"+ejercicio.nombre+"</h3>";
        html+= "</br>";
        html+= "<p>"+ejercicio.tipoMuscular+"</p>";
        html+= "<p>"+ejercicio.descripcion+"</p>";
        html+= "<p>"+ejercicio.series+"/"+ ejercicio.repeticiones+"</p>"
        html+= "<img src ='"+ejercicio.img+"'></img>";
        html+= "</div>";
    })
    document.getElementById("listado-ejercicios").innerHTML = html;
}
