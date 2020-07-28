$(document).ready(function action(){
    parmURL();
});
function parmURL() {
    /* Obtener la url completa */
    url = document.URL;
    /* Buscar a partir del signo de interrogación ? */
    url = String(url.match(/\?+.+/));
    /* limpiar la cadena quitándole el signo ? */
    url = url.replace("?", "");
    /* Crear un array con parametro=valor */
    url = url.split("&");   
    let epll; 
    epll=new Array(5);
    x = 0;
    while (x < url.length){
        p = url[x].split("=");
        epll[x]=p[1];
        x++;
    }
    console.log(epll);
    $("#Alimento").text(epll[0]);
    $("#Calorias").text(epll[1]);
    $("#Grasas").text(epll[2]);
    $("#Proteinas").text(epll[3]);
    $("#Carbohidratos").text(epll[4]);
    if(epll[5]=="2"){
        $("#imagen").attr("src","meh.png");
    }
}