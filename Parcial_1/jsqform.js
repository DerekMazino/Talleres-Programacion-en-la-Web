$(document).ready(function action(){
    parmURL();
});
function parmURL() {
    url = document.URL;
    url = String(url.match(/\?+.+/));
    url = url.replace("?", "");
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
    if(epll[5]=="mal"){
        $("#imagen").attr("src","meh.png");
    }
}