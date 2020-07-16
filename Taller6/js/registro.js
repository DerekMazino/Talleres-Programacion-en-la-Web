let x = $(document);//Variable Global para el documento html
x.ready(inicializarEventos);//Se comienza a ejecutar la funcion principal

function inicializarEventos(){
    let x = $("#enfermedad");
    x.click(clickEnfermedad);
}

function clickEnfermedad(){
    alert("Se esta seleccionando una opcion");
}
