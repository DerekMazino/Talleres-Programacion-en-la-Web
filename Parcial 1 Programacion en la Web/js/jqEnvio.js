$(document).ready(inicialiarEventos);
function inicialiarEventos(){
    parametroURL();
}
function parametroURL() {
    /* Obtener la url completa */
    url = document.URL;
    /* Buscar a partir del signo de interrogación ? */
    url = String(url.match(/\?+.+/));
    /* limpiar la cadena quitándole el signo ? */
    url = url.replace("?", "");
    /* Crear un array con parametro=valor */
    url = url.split("&");   
    /* 
    Recorrer el array url
    obtener el valor y dividirlo en dos partes a través del signo = 
    0 = parametro
    1 = valor
    Si el parámetro existe devolver su valor
    */
    let meses; 
    meses=new Array(5);
    x = 0;
    while (x < url.length){
        p = url[x].split("=");
        meses[x]=p[1];
        x++;
    }
    console.log(meses);
    $("#Alimento").text(meses[0]);
    $("#Calorias").text(meses[1]);
    $("#Grasas").text(meses[2]);
    $("#Proteinas").text(meses[3]);
    $("#Carbohidratos").text(meses[4]);
    if(meses[5]=="2"){
        $("#imagen").attr("src","img/nok.png");
    }
}