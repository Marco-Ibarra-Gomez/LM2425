$(document).ready(function ()
{
    var nombrado = "usuario";
    localStorage.getItem(nombrado);
    var mensajebienvenida = $("#mensajeBienvenida");
    $("#formularioNombre").on('submit', function(evt)
    {
        evt.preventDefault();
        $("button").click(function ()
        { 
            var nombre = $("#nombre").val();
            localStorage.setItem(nombrado, nombre);
            $(mensajebienvenida).css("opacity", "100%");
            $(mensajebienvenida).css("background-color", "#34df50");
            $(mensajebienvenida).css("color","green");
            $(mensajebienvenida).slideToggle("slow");
            $(mensajebienvenida).html("<p>¡Hola, "+localStorage.getItem(nombrado)+"! Bienvenido de nuevo.</p>")
            $(mensajebienvenida).removeClass("oculto");
        });
    });
    if (localStorage.getItem(nombrado) == null)
    {
        $(mensajebienvenida).addClass("oculto");
    }
    else
    {
        $(mensajebienvenida).css("opacity", "100%");
        $(mensajebienvenida).css("background-color", "#34df50");
        $(mensajebienvenida).css("color","green");
        $(mensajebienvenida).slideToggle("slow");
        $(mensajebienvenida).html("<p>¡Hola, "+localStorage.getItem(nombrado)+"! Bienvenido de nuevo.</p>")
        $(mensajebienvenida).removeClass("oculto");
    }
});