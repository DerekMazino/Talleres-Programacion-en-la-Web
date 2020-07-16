let x = $(document);//Variable Global para el documento html
x.ready(inicializarEventos);//Se comienza a ejecutar la funcion principal

function inicializarEventos(){
    valoresIniciales();//Se carga el formulrio sin mostrar las partes opcionales
    let x = $("input[name=enfermedad]");//Se traen los datos del input
    x.click(clickEnfermedad);//se usa evento click que se active al dar un click sobre el juego de radios
    let y = $("input[name=contagiosa]");
    y.click(clickContagiosa);
}
function valoresIniciales(){
    //Ocultando partes opcionales
    $("#opcional1").hide();
    $("#opcional2").hide();
}
function clickEnfermedad(){
    let x = $("#opcional1");//Se optine la seccion HTML contenida dentro del div con id 'opcional1'
    if($(this).val()=="si"){//Se comprueba si seleccionó 'si' o 'no'
        x.show("fast");//Se muestra rápido
    }else{
        x.hide("slow");//Se oculta lento
    }
}
function clickContagiosa(){
    let x = $("#opcional2");
    if($(this).val()=="si"){
        x.show("fast");
    }else{
        x.hide("slow");
    }
}
