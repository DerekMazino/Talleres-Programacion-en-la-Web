$(document).ready(inicialiarEventos);
function inicialiarEventos(){
    valoresIniciales();
    $("#editar1").click(celda1);
    $("#editar2").click(celda2);
    $("#editar3").click(celda3);
    $("#editar4").click(celda4);
    $("#opcional1").hide();
    $("#btn2").click(btn2Click);
}
function celda1(){
    $(this).hide();
    $("#edicion1").show();
    enableRow1(false);
}
function celda2(){
    $(this).hide();
    $("#edicion2").show();
    enableRow2(false);
}
function celda3(){
    $(this).hide();
    $("#edicion3").show();
    enableRow3(false);
}
function celda4(){
    $(this).hide();
    $("#edicion4").show();
    enableRow4(false);
}
function valoresIniciales(){
    $("#edicion1").hide();
    $("#edicion2").hide();
    $("#edicion3").hide();
    $("#edicion4").hide();
    $("#ok_nok1").hide();
    $("#ok_nok2").hide();
    $("#ok_nok3").hide();
    $("#ok_nok4").hide();
    enableRow1(true);
    enableRow2(true);
    enableRow3(true);
    enableRow4(true);
    initialValueRow1();
    initialValueRow2();
    initialValueRow3();
    initialValueRow4();
}
function initialValueRow1(){
    $("#Alimentos1").val("Arandano");
    $("#Calorias1").val("49");
    $("#Grasas1").val("0.2");
    $("#Protehina1").val("0.4");
    $("#Carbohidratos1").val("12.7");
}
function initialValueRow2(){
    $("#Alimentos2").val("Platano");
    $("#Calorias2").val("90");
    $("#Grasas2").val("0.3");
    $("#Protehina2").val("1.0");
    $("#Carbohidratos2").val("23.5");
}
function initialValueRow3(){
    $("#Alimentos3").val("Cereza");
    $("#Calorias3").val("46");
    $("#Grasas3").val("0.4");
    $("#Protehina3").val("0.9");
    $("#Carbohidratos3").val("10.9");
}
function initialValueRow4(){
    $("#Alimentos4").val("Fresa");
    $("#Calorias4").val("37");
    $("#Grasas4").val("0.5");
    $("#Protehina4").val("0.8");
    $("#Carbohidratos4").val("8.3");
}
function enableRow1(enab){
    $("#Alimentos1").prop("disabled", enab);
    $("#Calorias1").prop("disabled", enab);
    $("#Grasas1").prop("disabled", enab);
    $("#Protehina1").prop("disabled", enab);
    $("#Carbohidratos1").prop("disabled", enab);
    $("#opcional1").show();
    if(!enab){
        $("#ok_nok1").show();
        $("#img1").hide();
    }
}
function enableRow2(enab){
    $("#Alimentos2").prop("disabled", enab);
    $("#Calorias2").prop("disabled", enab);
    $("#Grasas2").prop("disabled", enab);
    $("#Protehina2").prop("disabled", enab);
    $("#Carbohidratos2").prop("disabled", enab);
    $("#opcional1").show();
    if(!enab){
        $("#ok_nok2").show();
        $("#img2").hide();
    }
}
function enableRow3(enab){
    $("#Alimentos3").prop("disabled", enab);
    $("#Calorias3").prop("disabled", enab);
    $("#Grasas3").prop("disabled", enab);
    $("#Protehina3").prop("disabled", enab);
    $("#Carbohidratos3").prop("disabled", enab);
    $("#opcional1").show();
    if(!enab){
        $("#ok_nok3").show();
        $("#img3").hide();
    }
}
function enableRow4(enab){
    $("#Alimentos4").prop("disabled", enab);
    $("#Calorias4").prop("disabled", enab);
    $("#Grasas4").prop("disabled", enab);
    $("#Protehina4").prop("disabled", enab);
    $("#Carbohidratos4").prop("disabled", enab);
    $("#opcional1").show();
    if(!enab){
        $("#ok_nok4").show();
        $("#img4").hide();
    }
}
function btn2Click(){
    valoresIniciales();
    $("#opcional1").hide();
    $("#editar1").show();
    $("#editar2").show();
    $("#editar3").show();
    $("#editar4").show();
    $("#img1").show();
    $("#img2").show();
    $("#img3").show();
    $("#img4").show();
}
